import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  doLogin(): Observable<HttpResponse<{name: string }>> {
    return this.http.get<{name: string }>('http://', { observe: 'response' });
  }
}
