import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
  orders = [
    {
      id: 'ORD-2026-78543',
      date: new Date('2026-01-07'),
      status: 'delivered',
      total: 897.99,
      itemCount: 3,
      items: [
        { name: 'Premium Wireless Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60' },
        { name: 'Smart Watch Series 5', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=60' },
      ],
    },
    {
      id: 'ORD-2026-78412',
      date: new Date('2026-01-03'),
      status: 'shipped',
      total: 549.00,
      itemCount: 2,
      items: [
        { name: 'Laptop Stand Pro', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=60' },
        { name: 'Wireless Keyboard', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=60' },
      ],
    },
    {
      id: 'ORD-2025-77891',
      date: new Date('2025-12-28'),
      status: 'processing',
      total: 199.99,
      itemCount: 1,
      items: [
        { name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=60' },
      ],
    },
    {
      id: 'ORD-2025-77654',
      date: new Date('2025-12-20'),
      status: 'delivered',
      total: 1249.00,
      itemCount: 4,
      items: [
        { name: 'Gaming Mouse', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=60' },
        { name: 'USB-C Hub', image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=60' },
      ],
    },
  ];

  expandedOrder: string | null = null;

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      processing: 'Processing',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled',
    };
    return labels[status] || status;
  }

  toggleExpand(orderId: string): void {
    this.expandedOrder = this.expandedOrder === orderId ? null : orderId;
  }
}
