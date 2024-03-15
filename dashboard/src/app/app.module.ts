import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { UsersComponent } from './components/users/users/users.component';
import { MainComponent } from './components/main/main.component';
import { CoachComponent } from './components/coach/coach.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MealsComponent } from './components/meals/meals.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MealsService } from './components/services/meals.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MealFormComponent } from './components/mealForm/mealForm.component';
import { AuthInterceptor } from './components/services/interceptors/auth.interceptor';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
    MainComponent,
    CoachComponent,
    LoginComponent,
    RegisterComponent,
    MealsComponent,
    HomeComponent,
    OrdersComponent,
    NotFoundComponent,
    MealFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync(),
    MealsService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

