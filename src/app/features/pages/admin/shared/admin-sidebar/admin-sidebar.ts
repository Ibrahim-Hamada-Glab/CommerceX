import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {
  @Input() collapsed = false;

  menuItems = [
    { label: 'Dashboard', icon: 'fa-solid fa-chart-line', route: '/admin' },
    { label: 'Products', icon: 'fa-solid fa-box', route: '/admin/products' },
    { label: 'Orders', icon: 'fa-solid fa-shopping-bag', route: '/admin/orders' },
    { label: 'Customers', icon: 'fa-solid fa-users', route: '/admin/customers' },
  ];

  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }
}
