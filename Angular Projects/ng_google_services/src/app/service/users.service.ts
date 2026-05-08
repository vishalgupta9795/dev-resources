import { Injectable, Inject, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'shared-stack';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServ = inject(ApiService); 
  constructor() { }

  getUsers():Observable<any>{ 
    return this.apiServ.Get<any>("/users");
  }
}
