import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    private customHeaders = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.customHeaders.append('Content-Type', 'application/json');

    }

    post = (body, options?): Observable<any> => {
        return this.http.post(environment.URL, body, { ...this.customHeaders, ...options }).pipe(
            map((response) => response),
            catchError(this.handleError)
        );
    }

    get = (params, options?): Observable<any> => {
        let url = environment.URL + (params ? '?' : '');
        Object.keys(params).forEach((key, index) => {
            if (params[key]) {
                url += `${key}=${params[key]}`;
            }
        });
        return this.http.get(url, { ...this.customHeaders, ...options }).pipe(
            map((response) => response),
            catchError(this.handleError)
        );
    }

    getFile = (fileURL, options?): Observable<any> => {
        return this.http.get(fileURL, { ...this.customHeaders, ...options }).pipe(
            map((response) => response),
            catchError(this.handleError)
        );
    }

    protected handleError(error: any) {
        console.log(error);
        return throwError(error);
    }
}
