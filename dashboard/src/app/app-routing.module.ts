import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users/users.component';
import { CoachComponent } from './components/coach/coach.component';
import { MealsComponent } from './components/meals/meals.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MealFormComponent } from './components/mealForm/mealForm.component';

const routes: Routes = [
  {path:'',redirectTo:'main' ,pathMatch:'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'users', component: UsersComponent },
      { path: 'coaches', component: CoachComponent },
      { path: 'meals', component: MealsComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'main', component: MainComponent },
  { path: 'users', component: UsersComponent },
  { path: 'coaches', component: CoachComponent },
  { path: 'meals', component: MealsComponent, 
  children: [
    { path: 'mealform', component: MealFormComponent },
  ] },
  { path: 'orders', component: OrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mealform', component: MealFormComponent },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
