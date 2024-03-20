import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { error } from 'console';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreService } from '../../core/core.service';
import { PatientListComponent } from '../patient-list/patient-list.component';
import { SettingsComponent } from '../settings/settings.component';
// import { DoctorComponent } from '../../doctor/doctor.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'patientName',
    'phone',
    'state',
    'country',
    'bloodGroup',
    'city',
    'gender',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
     private _apiService: ApiService,
     private _coreservice:CoreService
     ) {}

  openPopup() {
    const dialogRef = this._dialog.open(PatientListComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientsList();
        }
      },
    });
  }

  getPatientsList() {
    this._apiService.getPatientsList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  ngOnInit(): void {
    this.getPatientsList();
  }

  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePatient(id: number) {
    this._apiService.deletePatients(id).subscribe({
      next: (res) => {
        // alert('Patient Deleted Successfully');
        this._coreservice.openSnackBar('Patient Deleted '),
        this.getPatientsList();
      },
      error: console.log,
    });
  }
  editPatient(data:any){
  const dialogRef = this._dialog.open(PatientListComponent, {
    data,
  });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientsList();
        }
      },
    });

  }
  }

