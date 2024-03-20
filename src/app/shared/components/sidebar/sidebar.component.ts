import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePopupComponent } from '../profile-popup/profile-popup.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'], // Use styleUrls instead of styleUrl
})
export class SidebarComponent {
  selectedChild: string = '';

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}
  selectChild(className: string) {
    this.selectedChild = className;
  }

  menuItems = [
    {
      label: 'Dashboard',
      route: '/',
      image: 'https://cdn-icons-png.flaticon.com/128/3388/3388614.png',
    },
    {
      label: 'Patient',
      route: '/posts',
      image: 'https://cdn-icons-png.flaticon.com/128/1512/1512910.png',
    },
    {
      label: 'Doctor',
      route: '/add_doctor',
      image: 'https://cdn-icons-png.flaticon.com/128/920/920988.png',
    },
    {
      label: 'Doctor List',
      route: '/doctor-list',
      image: 'https://cdn-icons-png.flaticon.com/128/4850/4850806.png',
    },
    {
      label: 'DepartMent',
      route: '/account',
      image: 'https://cdn-icons-png.flaticon.com/128/4706/4706771.png',
    },
    {
      label: 'Appointment',
      route: '/settings',
      image: 'https://cdn-icons-png.flaticon.com/128/2933/2933338.png',
    },
  ];

  constructor(private router: Router, private _dialog: MatDialog) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  isSelectedItem(item: any): boolean {
    return item === this.isSelectedItem;
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }
  openprofilePopup() {
    const dialogRef = this._dialog.open(ProfilePopupComponent);
    // dialogRef.afterClosed().subscribe({

    // });
  }
}
