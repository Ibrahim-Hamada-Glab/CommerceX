import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  currentStep = 1;

  // Shipping form
  shipping = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  };

  // Payment form
  payment = {
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  };

  // Order items (mock data)
  orderItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80',
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 349.00,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80',
    },
  ];

  get subtotal(): number {
    return this.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get shipping_cost(): number {
    return 0;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.shipping_cost + this.tax;
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep) {
      this.currentStep = step;
    }
  }

  placeOrder(): void {
    console.log('Order placed:', {
      shipping: this.shipping,
      payment: this.payment,
      items: this.orderItems,
      total: this.total,
    });
  }
}
