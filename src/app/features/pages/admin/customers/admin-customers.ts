import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebar } from '../shared/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-customers',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AdminSidebar],
  templateUrl: './admin-customers.html',
  styleUrl: './admin-customers.css',
})
export class AdminCustomers {
  searchQuery = '';
  statusFilter = '';
  selectedCustomer: any = null;

  customers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'JD',
      phone: '+1 (555) 123-4567',
      orders: 12,
      totalSpent: 2847.99,
      joinedDate: new Date('2025-03-15'),
      status: 'active',
      lastOrder: new Date('2026-01-05'),
      address: '123 Main Street, New York, NY 10001',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: 'JS',
      phone: '+1 (555) 234-5678',
      orders: 8,
      totalSpent: 1549.00,
      joinedDate: new Date('2025-05-22'),
      status: 'active',
      lastOrder: new Date('2026-01-07'),
      address: '456 Oak Avenue, Los Angeles, CA 90001',
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob.wilson@example.com',
      avatar: 'BW',
      phone: '+1 (555) 345-6789',
      orders: 3,
      totalSpent: 449.97,
      joinedDate: new Date('2025-08-10'),
      status: 'active',
      lastOrder: new Date('2025-12-20'),
      address: '789 Pine Road, Chicago, IL 60601',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      avatar: 'AB',
      phone: '+1 (555) 456-7890',
      orders: 15,
      totalSpent: 4299.50,
      joinedDate: new Date('2025-01-08'),
      status: 'active',
      lastOrder: new Date('2026-01-06'),
      address: '321 Elm Street, Houston, TX 77001',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      avatar: 'CD',
      phone: '+1 (555) 567-8901',
      orders: 0,
      totalSpent: 0,
      joinedDate: new Date('2025-11-30'),
      status: 'inactive',
      lastOrder: null,
      address: '654 Maple Drive, Phoenix, AZ 85001',
    },
    {
      id: 6,
      name: 'Emily Johnson',
      email: 'emily.johnson@example.com',
      avatar: 'EJ',
      phone: '+1 (555) 678-9012',
      orders: 6,
      totalSpent: 987.45,
      joinedDate: new Date('2025-07-14'),
      status: 'active',
      lastOrder: new Date('2025-12-28'),
      address: '987 Cedar Lane, Seattle, WA 98101',
    },
  ];

  recentOrders = [
    { id: 'ORD-78543', date: new Date('2026-01-05'), total: 249.99, status: 'delivered' },
    { id: 'ORD-78412', date: new Date('2025-12-28'), total: 149.00, status: 'delivered' },
    { id: 'ORD-78301', date: new Date('2025-12-15'), total: 399.99, status: 'delivered' },
  ];

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  openCustomerDetail(customer: any): void {
    this.selectedCustomer = customer;
  }

  closeCustomerDetail(): void {
    this.selectedCustomer = null;
  }

  getOrderStatusClass(status: string): string {
    return `order-status-${status}`;
  }
}
