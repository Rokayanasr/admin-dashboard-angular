import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IMeal } from '../../DataTypes/meals';
import { MealI } from '../../DataTypes/order';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  apiurl = "http://localhost:3000"

  constructor(private Http: HttpClient) {
  }

  getAllMeals(): Observable<any> {
    return this.Http.get(this.apiurl + "/meals/get-all")

  }


  getMeal(id: string): Observable<ApiResponse<any>> {
    return this.Http.get<ApiResponse<any>>(this.apiurl + "/meals/getItemById/" + id)
  }

  createMeal(meal: any): Observable<ApiResponse<any>> {
    return this.Http.post<ApiResponse<any>>(this.apiurl + "/meals/add-item/", meal);
  }
  updateMeal(id: string, meal: any) {
    return this.Http.patch<ApiResponse<any>>(this.apiurl + "/meals/edit-item/" + id, meal)
  }

  deleteMeal(id: string): Observable<ApiResponse<IMeal>> {
    return this.Http.delete<ApiResponse<IMeal>>(this.apiurl + "/meals/delete-item/" + id)
  }


}
