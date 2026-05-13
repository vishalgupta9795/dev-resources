import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'shared-stack';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private apiServ: ApiService) { }

  getUsers():Observable<any>{
    return this.apiServ.Get<any>("/users");
  }
}
