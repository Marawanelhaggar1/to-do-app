import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AuthComponent } from './auth/auth.component';
import { MatAngularModule } from 'src/app/shared/ui/mat-angular/mat-angular.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatAngularModule,
  ],
})
export class LoginModule {}
