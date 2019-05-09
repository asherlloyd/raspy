import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketDetailComponent } from './bracket-detail/bracket-detail.component';
import { BracketComponent } from './bracket/bracket.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'brackets', component: BracketComponent, canActivate: [AuthService] },
    { path: 'brackets/:id', component: BracketDetailComponent, canActivate: [AuthService] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/brackets', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
