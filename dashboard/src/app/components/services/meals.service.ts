import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IMeal } from '../../DataTypes/meals';
import { MealI } from '../../DataTypes/order';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  apiurl = "localhost:3000/meals"

  constructor(private Http: HttpClient) {
  }

  getAllMeals(): Observable<ApiResponse<IMeal[]>> {
    return this.Http.get<ApiResponse<IMeal[]>>(`${this.apiurl}/get-all`)
  }

  getMeal(id: string): Observable<ApiResponse<IMeal>> {
    return this.Http.get<ApiResponse<IMeal>>(`${this.apiurl}/getItemById/${id}`)
  }

  createMeal(meal: IMeal): Observable<ApiResponse<IMeal>> {
    return this.Http.post<ApiResponse<IMeal>>(`${this.apiurl}/add-item`, meal)

  }

  updateMeal(id: string, meal: IMeal) {
    return this.Http.patch<ApiResponse<IMeal>>(`${this.apiurl}/${id}`, meal)
  }

  deleteMeal(id: string):Observable<any>{
    return this.Http.delete(`${this.apiurl}/${id}`)
  }
}
