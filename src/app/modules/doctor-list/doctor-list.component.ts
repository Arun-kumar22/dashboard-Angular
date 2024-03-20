import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent implements OnInit{
 doctors:any[];

 constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>[]>('db.json').subscribe(data=>{
      this.doctors = data;
    });
  }
}
