import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartementModel } from '../Models/DepartementModel';

@Injectable({
  providedIn: 'root',
})
export class DepartementService {
  private apiUrl=environment.baseUrl+'departements';
  constructor( private http: HttpClient) 
  {}
  getDepartements():Observable<DepartementModel[]> {
    return this.http.get<DepartementModel[]>(this.apiUrl);
  }
}
