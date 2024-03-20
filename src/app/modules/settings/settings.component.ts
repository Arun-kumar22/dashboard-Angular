import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  hide: boolean = true; // Define hide variable and set its initial value
  isEditing: boolean = false;
  newPassword: string = '';
  currentPassword: string = '';
  changePassword: string = '';
  showNewPassword: boolean = false;
  showCurrentPassword: boolean = false;
  showPassword: boolean = false;
  confirmPassword: string = '';
  savedPassword: string = '';
  isFormValid: boolean = true;
  credUsername: string = ''; // For storing credential username/email
  credPassword: string = ''; // For storing credential password

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  savePassword() {
    // Check if new password matches confirm password
    if (this.newPassword === this.confirmPassword) {
      // Save the new password
      this.savedPassword = this.newPassword;

      // Reset form fields
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';

      // Hide edit mode
      this.isEditing = false;
    } else {
      // Show error message or handle mismatch case as needed
      console.log("New password and confirm password don't match.");
    }
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleCurrentPasswordVisibility() {
    this.showCurrentPassword = !this.showCurrentPassword;
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  submitCredentials() {
    // Implement functionality to handle credential submission
    console.log('Username/Email:', this.credUsername);
    console.log('Password:', this.credPassword);
    // You can add further logic here, like making an API call to authenticate the user
  }
}