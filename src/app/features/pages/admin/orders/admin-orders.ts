import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebar } from '../shared/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-orders',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AdminSidebar],
  templateUrl: './admin-orders.html',
  styleUrl: './admin-orders.css',
})
export class AdminOrders {
  activeTab = 'all';
  searchQuery = '';
  selectedOrder: any = null;

  tabs = [
    { id: 'all', label: 'All Orders', count: 156 },
    { id: 'pending', label: 'Pending', count: 23 },
    { id: 'processing', label: 'Processing', count: 18 },
    { id: 'shipped', label: 'Shipped', count: 45 },
    { id: 'delivered', label: 'Delivered', count: 70 },
  ];

  orders = [
    {
      id: 'ORD-78543',
      customer: { name: 'John Doe', email: 'john@example.com', avatar: 'JD' },
      date: new Date('2026-01-07'),
      items: 3,
      total: 897.99,
      status: 'pending',
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Main St, New York, NY 10001',
    },
    {
      id: 'ORD-78542',
      customer: { name: 'Jane Smith', email: 'jane@example.com', avatar: 'JS' },
      date: new Date('2026-01-07'),
      items: 2,
      total: 599.00,
      status: 'processing',
      paymentMethod: 'PayPal',
      shippingAddress: '456 Oak Ave, Los Angeles, CA 90001',
    },
    {
      id: 'ORD-78541',
      customer: { name: 'Bob Wilson', email: 'bob@example.com', avatar: 'BW' },
      date: new Date('2026-01-06'),
      items: 1,
      total: 149.99,
      status: 'shipped',
      paymentMethod: 'Credit Card',
      shippingAddress: '789 Pine Rd, Chicago, IL 60601',
    },
    {
      id: 'ORD-78540',
      customer: { name: 'Alice Brown', email: 'alice@example.com', avatar: 'AB' },
      date: new Date('2026-01-06'),
      items: 4,
      total: 899.00,
      status: 'delivered',
      paymentMethod: 'Debit Card',
      shippingAddress: '321 Elm St, Houston, TX 77001',
    },
    {
      id: 'ORD-78539',
      customer: { name: 'Charlie Davis', email: 'charlie@example.com', avatar: 'CD' },
      date: new Date('2026-01-05'),
      items: 2,
      total: 329.99,
      status: 'delivered',
      paymentMethod: 'Credit Card',
      shippingAddress: '654 Maple Dr, Phoenix, AZ 85001',
    },
  ];

  statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  openOrderDetail(order: any): void {
    this.selectedOrder = order;
  }

  closeOrderDetail(): void {
    this.selectedOrder = null;
  }

  updateOrderStatus(orderId: string, newStatus: string): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
    }
  }
}
