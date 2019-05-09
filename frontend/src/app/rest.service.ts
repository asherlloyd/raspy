import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { apiLocation } from './globals';

const endpoint = apiLocation + '/api/';
const httpOpts = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // get single bracket
  getBracket(id): Observable<any> {
    return this.http.get(endpoint + 'brackets/' + id).pipe(
      map(this.extractData));
  }

  // get all registered brackets
  getBrackets(): Observable<any> {
    return this.http.get(endpoint + 'brackets').pipe(
      map(this.extractData));
  }

  sendUserCredentials(user_data): Observable<any> {
    return this.http.post<any>(endpoint + 'login', user_data, httpOpts).pipe(
      catchError(this.handleError<any>('sendUserCredentials'))
    );
  }

  registerUser(user_data): Observable<any> {
    return this.http.post<any>(endpoint + 'register', user_data, httpOpts).pipe(
      catchError(this.handleError<any>('registerUser'))
    );
  }

  //..

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
