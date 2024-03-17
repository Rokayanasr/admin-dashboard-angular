import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, ILogin, IRegister, } from '../../DataTypes/users';

@Injectable()
export class UsersService {
  private userubject: BehaviorSubject<IRegister[]> = new BehaviorSubject<any>([]);
  public users$: Observable<IRegister[]> = this.userubject.asObservable();
    OriginalPath = "http://localhost:3000";

    constructor(private Http: HttpClient) {
      this.getAllUsers().subscribe({
        next: (response) => {
          if (response.data) {
            this.userubject.next(response.data);
          }
        },
      });
    }
    // registerUser(userData: IUser): Observable<any> {
    //     return this.Http.post<any>(this.OriginalPath + "/api/register/", userData);
    //   }
      
      registerUser(userData: IRegister): Observable<any>{
        return this.Http.post (this.OriginalPath + "/api/register/", userData , { responseType: 'text' });
      }
      loginUser(userData: ILogin): Observable<any>{
        return this.Http.post (this.OriginalPath + "/api/login/", userData , { responseType: 'text' });
      }
      getAllUsers(): Observable<ApiResponse<IRegister[]>>{
        return this.Http.get<ApiResponse<IRegister>>(this.OriginalPath + "/user/getallusers");
      }
      saveToken(token: string): void {
        localStorage.setItem('token', token);
      }
    
      getToken(): string | null {
        return localStorage.getItem('token');
      }
    //   handleToken(token: string) {
    //     // Handle the token as needed
    //     console.log('Token:', token);
    
    //     // For example, you can store the token in localStorage
    //     localStorage.setItem('token', token);
    // }
    







    // ==================orders=====================

    // GetAllOders() {
    //     return this.Http.get<ApiResponse<IProduct[]>>(this.OriginalPath + "/api/orders")
    // }
    // GetOrderByID(id: string) {
    //     return this.Http.get<APIResult<IProduct>>(this.OriginalPath + "/api/orders" + id)
    // }
    // AddOrder(data: FormData) {
    //     return this.Http.post<APIResult<any>>(this.OriginalPath + "/api/orders", data)
    // }
}
