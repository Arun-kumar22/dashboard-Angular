import { Component,Inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CoreService } from '../../core/core.service';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss'
})
export class PatientListComponent {
  isEditing: boolean = false;
  dataSource!: MatTableDataSource<any>;

  patientForm: FormGroup;

  displayedColumns: string[] = [
    'id',
    'patientname',
    'age',
    'mobile',
    'city',
    'gender',
    'state',
    'country',
    'action',
    'zipcode',
  ];
  bloodgroup: string[] = [
    'O',
    'O-',
    'A',
    'A+',
    'B',
    'B+',
    'AB',
    'AB+',
    'A1B+',
    'A1B-',
  ];
  gender: string[] = ['Male', 'Female', 'Other'];
  constructor(
    private _fb: FormBuilder,
    private _apiService: ApiService,
    private _dialogRef: MatDialogRef<PatientListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreservice:CoreService
  ) {
    this.patientForm = this._fb.group({
      patientName: '',
      phone: '',
      dateofbirth: '',
      state: '',
      country: '',
      bloodGroup: '',
      city: '',
      gender: '',
    });
  }
  ngOnInit(): void {
    this.patientForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.patientForm.valid) {
      if (this.data) {
        console.log(this.patientForm.value);
        this._apiService.editPatients(this.data.id, this.patientForm.value).subscribe({
            next: (val: any) => {
              // alert('');
              this._coreservice.openSnackBar('Patient Updated');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        console.log(this.patientForm.value);
        this._apiService.addPatients(this.patientForm.value).subscribe({
          next: (val: any) => {
            // alert('Patient Added Successfully');
             this._coreservice.openSnackBar('Patient Added');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  currentDate: Date = new Date(); // Get the current date
  currentYear: number = this.currentDate.getFullYear();
}
