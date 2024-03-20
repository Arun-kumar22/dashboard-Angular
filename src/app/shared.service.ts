import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  private profileImageUrlSubject = new BehaviorSubject<string>(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  );
  profileImageUrl$ = this.profileImageUrlSubject.asObservable();


  updateProfileImageUrl(url: string) {
    this.profileImageUrlSubject.next(url);
  }
}
