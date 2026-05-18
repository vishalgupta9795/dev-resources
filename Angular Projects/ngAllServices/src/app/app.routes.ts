import { Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { GoogeLoginComponent } from './Component/googe-login/googe-login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path:"login", component:LoginComponent},
    {path:"google_auth", component:GoogeLoginComponent}
];
