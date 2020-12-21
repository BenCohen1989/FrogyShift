import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth-interceptor';


// paaaaa
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SidurListComponent } from './components/sidur-list/sidur-list.component';
import { WeekCreateComponent } from './components/week-create/week-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UserListComponent,
    AllWeeksComponent,
    SidurListComponent,
    WeekCreateComponent,
    RequestResetPasswordComponent,
    ResponseResetPasswordComponent,
    UserEditComponent,
    MyProfileComponent,
    EditSidurComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ], bootstrap: [AppComponent]
})
export class AppModule { }
