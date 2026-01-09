import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './order-confirmation.html',
  styleUrl: './order-confirmation.css',
})
export class OrderConfirmation {
  orderNumber = 'ORD-2026-78543';
  orderDate = new Date();
  estimatedDelivery = {
    start: 'January 12, 2026',
    end: 'January 15, 2026',
  };

  shippingAddress = {
    name: 'John Doe',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  };

  paymentMethod = {
    type: 'Visa',
    lastFour: '4242',
  };

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

  get shipping(): number {
    return 0;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.shipping + this.tax;
  }
}
