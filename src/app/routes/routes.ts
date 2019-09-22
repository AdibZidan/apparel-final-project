import { Routes } from '@angular/router';
import { LoginComponent } from '../header/authorization/login/login.component';
import { SignupComponent } from '../header/authorization/signup/signup.component';
import { SignoutComponent } from '../header/authorization/signout/signout.component';
import { UserComponent } from '../user/user.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { MainComponent } from '../main/main.component';
import { AdminComponent } from '../admin/admin.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'sign-out', component: SignoutComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthenticationGuard] },
    { path: 'main', component: MainComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthenticationGuard] }
];
