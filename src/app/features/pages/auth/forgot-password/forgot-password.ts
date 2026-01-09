import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css',
})
export class ForgotPassword {
  email = '';
  emailSent = false;

  onSubmit(): void {
    if (this.email) {
      console.log('Reset link sent to:', this.email);
      this.emailSent = true;
    }
  }

  resendEmail(): void {
    console.log('Resending reset link to:', this.email);
  }
}
