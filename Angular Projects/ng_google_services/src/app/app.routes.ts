import { Routes } from '@angular/router';
import { LoginComponent } from './Compnent/common/login/login.component';
import { GoogleAuthComponent } from './Compnent/common/google-auth/google-auth.component';
import { LandingComponent } from './Compnent/common/landing/landing.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Landing', pathMatch: 'full' },
    { path: 'Landing', component: LandingComponent },
    {path: "login_with_google", component: GoogleAuthComponent},
    { path: '**', redirectTo: 'Landing' }
];
