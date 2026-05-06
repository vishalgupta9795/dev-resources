import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserWindowPopupService {

  constructor() { }
  open(url: string, options?: { width?: number; height?: number; name?: string; }) {
    const width = options?.width || window.innerWidth * 0.5;
    const height = options?.height || window.innerHeight * 0.6;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    const features = [ `width=${Math.floor(width)}`, `height=${Math.floor(height)}`, `left=${Math.floor(left)}`, `top=${Math.floor(top)}`, `resizable=yes`, `scrollbars=yes` ].join(',');
    const popup = window.open(url, options?.name || 'PopupWindow', features);

    
    if (!popup) {
      console.warn('Popup blocked by browser');
      return null;
    }
  
    const timer = setInterval(() => {
    if (popup.closed) {
      clearInterval(timer);
      console.log('Popup closed');
      // 👉 Do something (cleanup, API call, etc.)
    }
  }, 500);

    // popup.focus();
    // return popup;
window.addEventListener('message', (event) => {
    console.log('Received from popup:', event.data);
    if (event.origin !== window.location.origin) return;
    if (event.data?.type === 'POPUP_RESPONSE') {
      console.log('Data:', event.data.payload);
    }
  });
   popup.focus();
    return popup;
  }
  
}
