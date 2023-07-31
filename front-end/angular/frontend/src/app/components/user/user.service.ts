import { UserData } from './user-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:3003/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isErr: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",  
    });
  }

  create(user: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.baseUrl, user) .pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro inesperado", true);
    return EMPTY;
  }

  read(): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.baseUrl)
  }

  readById(id: string): Observable<UserData> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<UserData>(url)
  }

  readByUsername(username: string): Observable<UserData> {
    const url = `${this.baseUrl}?username=${username}`;
    return this.http.get<UserData>(url);
  }

  update(product: UserData): Observable<UserData> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<UserData>(url, product)
  }

  delete(id: number | undefined): Observable<UserData> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<UserData>(url)
  }
}