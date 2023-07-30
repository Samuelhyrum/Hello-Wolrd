import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3003/auth'; // URL da API de autenticação

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Enviar as credenciais para a API de autenticação
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password });
  }
}
