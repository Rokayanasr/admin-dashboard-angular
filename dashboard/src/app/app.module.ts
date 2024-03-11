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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MealsService } from './components/services/meals.service';

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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
    MealsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
