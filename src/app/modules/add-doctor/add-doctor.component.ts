import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorListComponent } from '../doctor-list/doctor-list.component';
import { error } from 'console';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.scss'
})
export class AddDoctorComponent{
  isEditing:boolean = false;
  dataSource!: MatTableDataSource<any>;
  doctorForm!: FormGroup;
  private _dialog: any;
  router: any;
  apiService: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.doctorForm = this.fb.group({
      doctorName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Designation: [''],
      address: [''],
      mobile: [''],
      short: [''],
      bloodGroup: ['']
    });
  }

  onSubmit(): void {
    if (this.doctorForm.valid) {
      this.apiService.addDoctor(this.doctorForm.value).subscribe(
        (response: any) => {
          console.log('Doctor added successfully:', response);
        },
        (error: any)=>{
          console.error('Error occurred while adding doctor:', error);
        }
      );
    }else{
      this.doctorForm.markAllAsTouched();
    }
  }  

  openPopup() {
    const dialogRef = this._dialog.open(DoctorListComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.getDoctorsList();
        }
      },
    });
  }
  getDoctorsList() {
    throw new Error('Method not implemented.');
  }
 

  }

