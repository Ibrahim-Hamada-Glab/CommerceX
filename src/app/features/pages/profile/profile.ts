import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  activeTab = 'personal';

  user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'JD',
    memberSince: new Date('2025-03-15'),
  };

  addresses = [
    {
      id: 1,
      label: 'Home',
      name: 'John Doe',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true,
    },
    {
      id: 2,
      label: 'Office',
      name: 'John Doe',
      address: '456 Business Ave, Suite 100',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false,
    },
  ];

  paymentMethods = [
    {
      id: 1,
      type: 'visa',
      lastFour: '4242',
      expiry: '12/26',
      name: 'John Doe',
      isDefault: true,
    },
    {
      id: 2,
      type: 'mastercard',
      lastFour: '8888',
      expiry: '08/27',
      name: 'John Doe',
      isDefault: false,
    },
  ];

  preferences = {
    emailNotifications: true,
    orderUpdates: true,
    newsletter: false,
    promotions: true,
  };

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  savePersonalInfo(): void {
    console.log('Saving personal info:', this.user);
  }

  setDefaultAddress(addressId: number): void {
    this.addresses.forEach(addr => {
      addr.isDefault = addr.id === addressId;
    });
  }

  deleteAddress(addressId: number): void {
    this.addresses = this.addresses.filter(addr => addr.id !== addressId);
  }

  setDefaultPayment(paymentId: number): void {
    this.paymentMethods.forEach(pm => {
      pm.isDefault = pm.id === paymentId;
    });
  }

  deletePayment(paymentId: number): void {
    this.paymentMethods = this.paymentMethods.filter(pm => pm.id !== paymentId);
  }

  savePreferences(): void {
    console.log('Saving preferences:', this.preferences);
  }

  getCardIcon(type: string): string {
    const icons: { [key: string]: string } = {
      visa: 'fa-brands fa-cc-visa',
      mastercard: 'fa-brands fa-cc-mastercard',
      amex: 'fa-brands fa-cc-amex',
    };
    return icons[type] || 'fa-solid fa-credit-card';
  }
}
