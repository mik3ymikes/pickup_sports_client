import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private router:Router) { }

  login(username:string, password:string){
    return this.http.post<{token:string}>(`${environment.apiUrl}/login`, {
      username,
      password
    }).pipe(switchMap((res:any)=>{
      this.setToken(res.token)
    }))
  }
  setToken(token:string){
    localStorage.setItem('token', token)
  }

  getToken(){
   return localStorage.getItem('token')
  }


  isLoggedIn(){
   return !! this.getToken();
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
