import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AccountComponent } from './modules/account/account.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { PatientListComponent } from './modules/patient-list/patient-list.component';
import { AddDoctorComponent } from './modules/add-doctor/add-doctor.component';
import { DoctorListComponent } from './modules/doctor-list/doctor-list.component';

const routes: Routes = [{

  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent
  } ,
{
  path:'posts',
  component:PostsComponent
},
{
  path:'add_patient',
  component:PatientListComponent
},
{
  path:'add_doctor',
  component:AddDoctorComponent
},
{
  path:'doctor-list',
  component:DoctorListComponent
},
{
  path:'account',
  component:AccountComponent
},{
  path:'settings',
  component:SettingsComponent
}],

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
