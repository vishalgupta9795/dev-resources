import { Routes } from '@angular/router';
import { LoginComponent } from './Compnent/common/login/login.component';
import { GoogleAuthComponent } from './Compnent/common/google-auth/google-auth.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: LoginComponent },
    {path: "login_with_google", component: GoogleAuthComponent},
    { path: '**', redirectTo: 'Login' }
];
