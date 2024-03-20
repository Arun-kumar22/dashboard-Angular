import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  selectedChild: string = ''

  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter();

  constructor(){ }

  ngOnInit(){  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
  selectChild(className: string) {
    this.selectedChild = className;
  }
}
