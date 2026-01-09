import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebar } from '../shared/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule, AdminSidebar],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  today = new Date();

  stats = [
    { label: 'Total Orders', value: '1,284', change: '+12.5%', trend: 'up', icon: 'fa-solid fa-shopping-bag', color: 'blue' },
    { label: 'Revenue', value: '$48,574', change: '+8.2%', trend: 'up', icon: 'fa-solid fa-dollar-sign', color: 'green' },
    { label: 'Products', value: '356', change: '+3.1%', trend: 'up', icon: 'fa-solid fa-box', color: 'purple' },
    { label: 'Customers', value: '2,847', change: '+18.7%', trend: 'up', icon: 'fa-solid fa-users', color: 'orange' },
  ];

  recentOrders = [
    { id: 'ORD-78543', customer: 'John Doe', email: 'john@example.com', date: new Date('2026-01-07'), total: 249.99, status: 'pending' },
    { id: 'ORD-78542', customer: 'Jane Smith', email: 'jane@example.com', date: new Date('2026-01-07'), total: 599.00, status: 'processing' },
    { id: 'ORD-78541', customer: 'Bob Wilson', email: 'bob@example.com', date: new Date('2026-01-06'), total: 149.99, status: 'shipped' },
    { id: 'ORD-78540', customer: 'Alice Brown', email: 'alice@example.com', date: new Date('2026-01-06'), total: 899.00, status: 'delivered' },
    { id: 'ORD-78539', customer: 'Charlie Davis', email: 'charlie@example.com', date: new Date('2026-01-05'), total: 329.99, status: 'delivered' },
  ];

  getStatusClass(status: string): string {
    return `status-${status}`;
  }
}
