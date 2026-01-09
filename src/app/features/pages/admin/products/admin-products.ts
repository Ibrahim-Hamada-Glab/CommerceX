import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSidebar } from '../shared/admin-sidebar/admin-sidebar';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, AdminSidebar],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts {
  searchQuery = '';
  selectedCategory = '';
  showModal = false;
  editingProduct: any = null;

  categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'];

  products = [
    { id: 1, name: 'Premium Wireless Headphones', category: 'Electronics', price: 199.99, stock: 45, status: 'active', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80' },
    { id: 2, name: 'Smart Watch Series 5', category: 'Electronics', price: 349.00, stock: 23, status: 'active', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80' },
    { id: 3, name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 79.99, stock: 0, status: 'out_of_stock', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=80' },
    { id: 4, name: 'Wireless Keyboard', category: 'Electronics', price: 129.99, stock: 67, status: 'active', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=80' },
    { id: 5, name: 'Gaming Mouse Pro', category: 'Electronics', price: 89.99, stock: 12, status: 'low_stock', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=80' },
    { id: 6, name: 'USB-C Hub 7-in-1', category: 'Electronics', price: 49.99, stock: 89, status: 'active', image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=80' },
  ];

  currentPage = 1;
  totalPages = 3;

  getStatusClass(status: string): string {
    return `status-${status.replace('_', '-')}`;
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      active: 'Active',
      out_of_stock: 'Out of Stock',
      low_stock: 'Low Stock',
      inactive: 'Inactive',
    };
    return labels[status] || status;
  }

  openAddModal(): void {
    this.editingProduct = null;
    this.showModal = true;
  }

  openEditModal(product: any): void {
    this.editingProduct = { ...product };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingProduct = null;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
