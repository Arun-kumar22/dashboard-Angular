import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import{MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
// import { ReportComponent } from '../../doctor/report.component';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {FloatLabelType,MatFormFieldModule} from '@angular/material/form-field';
import { AccountComponent } from '../../modules/account/account.component';
import { MatSelectModule } from '@angular/material/select';
import { SettingsComponent } from '../../modules/settings/settings.component';
import {MatBadgeModule} from '@angular/material/badge';
import { TableComponent } from '../../modules/table/table.component';
import { HttpClientModule} from '@angular/common/http';
// import { DialogComponent } from '../../modules/patient/DialogComponent';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { JsonPipe } from '@angular/common';
import { PatientListComponent } from '../../modules/patient-list/patient-list.component';
import { DoctorListComponent } from '../../modules/doctor-list/doctor-list.component';
import { AddDoctorComponent } from '../../modules/add-doctor/add-doctor.component';
// import { DoctorComponent } from '../../modules/account/doctor/doctor.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PatientListComponent,
    DoctorListComponent,
    AddDoctorComponent,
    AccountComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatPaginator,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    HttpClientModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogClose,
    MatSnackBarModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    JsonPipe,

    // MatTableDataSource,
    // AfterViewInit,
    // ViewChild
  ],
})
export class DefaultModule {}
