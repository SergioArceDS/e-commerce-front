import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const BASIC_URL = environment["BASIC_URL"];

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  register(signupDTO: any): Observable<any> {
    return this.http.post<any>(BASIC_URL + "sign-up", signupDTO);
  }
}