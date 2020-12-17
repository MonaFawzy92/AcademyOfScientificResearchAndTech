import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }
  getAll(apiController: string): Observable<any[]> {
    return this.http.get<any[]>(environment.serverUrl + apiController,
      // { headers: { Authorization: "Bearer " + localStorage.getItem("Token") } }
    );
  }

  get(apiController: string): Observable<any> {
    return this.http.get<any>(environment.serverUrl + apiController,
      // { headers: { Authorization: "Bearer " + localStorage.getItem("Token") } }
    );
  }

  // get by id
  getById(apiController: string, id: number): Observable<any> {
    return this.http.get<any>(environment.serverUrl + apiController + '/' + id,
      // { headers: { Authorization: "Bearer " + localStorage.getItem("Token") } }
    );
  }

  // add
  post(data: any, apiController: string, action?: string): Observable<any> {
    if (action) {
      return this.http.post<any>(
        // environment.serverUrl + apiController + '/' + action, data,
        // {headers:{'Authorization': 'Bearer ' + localStorage.getItem('Token')}}
        environment.serverUrl + apiController + '/' + action, data

      );
    } else {
      // tslint:disable-next-line: max-line-length
      //  return this.http.post<any>(environment.serverUrl + apiController, data, {headers:{'Authorization': 'Bearer ' + localStorage.getItem('Token')}});
      return this.http.post<any>(environment.serverUrl + apiController, data);

    }
  }

  put(data: any, apiController: string, action?: string): Observable<any> {
    return this.http.put<any>(
      environment.serverUrl + apiController + '/' + action, data
    );
  }
}
