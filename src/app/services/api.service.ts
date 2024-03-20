import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  addPatients(data: any) {
    return this.http.post<any>('http://localhost:3000/patientDetails/', data);
  }
  getPatientsList(){
    return this.http.get<any>('http://localhost:3000/patientDetails/');
  }
  editPatients(id:number,data:any) : Observable<any>{
    return this.http.put(`http://localhost:3000/patientDetails/`+id , data);
  }
  deletePatients(id:number){
    return this.http.delete<any>('http://localhost:3000/patientDetails/'+ id);
  }

  
  addDoctor(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/doctorDetails/', data);
  }

  getDoctorsList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/doctorDetails/');
  }

  editDoctor(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/doctorDetails/${id}`, data);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/doctorDetails/' + id);
  }
}

