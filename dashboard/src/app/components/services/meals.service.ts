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
    return this.Http.get(this.apiurl+"/meals/get-all")

  }


// getMeal(id: string): Observable<ApiResponse<IMeal>> {
//   return this.Http.get<ApiResponse<IMeal>>(this.apiurl}/meals/getItemById/${id}`)
// },

createMeal(meal: IMeal): Observable<ApiResponse<IMeal>> {
  return this.Http.post<ApiResponse<IMeal>>(this.apiurl+"/meals/add-item", meal);
}
// updateMeal(id: string, meal: IMeal) {
//   return this.Http.patch<ApiResponse<IMeal>>(`${this.apiurl}/meals/edit-item/${id}`, meal)
// },

// deleteMeal(id: string):Observable<any>{
//   return this.Http.delete(`${this.apiurl}/meals/delete-item/${id}`)
// }


}
