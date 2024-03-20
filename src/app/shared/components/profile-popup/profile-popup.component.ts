import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrl: './profile-popup.component.scss',
})
export class ProfilePopupComponent {
  profileImageUrl!: string;

  constructor(private http: HttpClient,
    ) {}

  openFilePicker() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadProfileImage(file);
  }

  uploadProfileImage(file: File) {
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);

    // Replace 'YOUR_UPLOAD_URL' with your actual upload URL
    this.http.post<any>('YOUR_UPLOAD_URL', formData).subscribe(
      (response) => {
        console.log('Image uploaded successfully:', response);
        this.profileImageUrl = response.imageUrl; // Update profile image URL
      },
      (error) => {
        console.error('Error uploading image:', error);
      }
    );
  }
}
