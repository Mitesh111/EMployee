import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {
  constructor(private _http: HttpClient) {}
  public createEmployee(emp: any) {
    return this._http.post('http://localhost:3000/users', emp);
  }
  public getAllEmployee() {
    return this._http.get('http://localhost:3000/users');
  }
}
