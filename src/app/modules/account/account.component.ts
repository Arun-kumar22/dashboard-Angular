import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';
import { MatDialog} from '@angular/material/dialog';
import { validateBasis } from '@angular/flex-layout';
import { ApiService } from '../../services/api.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private api: ApiService
  ) {}

  ngOnInit(): void {

  }

  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  currentDate: Date = new Date(); // Get the current date
  currentYear: number = this.currentDate.getFullYear();
}
