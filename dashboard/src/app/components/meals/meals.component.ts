import { Component } from '@angular/core';
import { MealI } from '../../DataTypes/order';
import { MealsService } from '../services/meals.service';
import { IMeal } from '../../DataTypes/meals';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  meals: IMeal[] = [];
  meal!: IMeal;
  constructor( private mealsService: MealsService) {
  }

  ngOnInit(): void {
    this.getAllMeals();
  }

  getAllMeals(){
    this.mealsService.getAllMeals().subscribe({
      next: (response) => {
        if (response.items) {
          this.meals = response.items;
          console.log(this.meals)
        }
      },
    });
  }

}
