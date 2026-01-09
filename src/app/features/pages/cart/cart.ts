import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 349.00,
      originalPrice: 399.00,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150',
      color: 'Silver',
    },
    {
      id: 3,
      name: 'Portable Bluetooth Speaker',
      price: 79.99,
      originalPrice: 99.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150',
      color: 'Blue',
    },
  ];

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get shipping(): number {
    return this.subtotal > 100 ? 0 : 9.99;
  }

  get tax(): number {
    return this.subtotal * 0.08;
  }

  get total(): number {
    return this.subtotal + this.shipping + this.tax;
  }

  decreaseQty(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQty(item: any): void {
    if (item.quantity < 10) {
      item.quantity++;
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
