import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAngularModule } from './shared/ui/mat-angular/mat-angular.module';
import { AuthService } from './core/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './modules/todos/all/all.component';
import { AddEditDeleteComponent } from './modules/todos/add-edit-delete/add-edit-delete.component';

@NgModule({
  declarations: [AppComponent, AllComponent, AddEditDeleteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAngularModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
