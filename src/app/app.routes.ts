import { Routes } from '@angular/router';
import { ProductDetails } from './features/pages/product-details/product-details';
import { Home } from './features/pages/home/home';
import { Login } from './features/pages/auth/login/login';
import { Register } from './features/pages/auth/register/register';
import { ForgotPassword } from './features/pages/auth/forgot-password/forgot-password';
import { Cart } from './features/pages/cart/cart';
import { Checkout } from './features/pages/checkout/checkout';
import { OrderConfirmation } from './features/pages/order-confirmation/order-confirmation';
import { Orders } from './features/pages/orders/orders';
import { AdminDashboard } from './features/pages/admin/dashboard/admin-dashboard';
import { AdminProducts } from './features/pages/admin/products/admin-products';
import { AdminOrders } from './features/pages/admin/orders/admin-orders';
import { AdminCustomers } from './features/pages/admin/customers/admin-customers';
import { Profile } from './features/pages/profile/profile';

export const routes: Routes = [
  // Public routes
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetails },

  // Auth routes
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },

  // Customer routes
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'order-confirmation', component: OrderConfirmation },
  { path: 'orders', component: Orders },
  { path: 'profile', component: Profile },

  // Admin routes
  { path: 'admin', component: AdminDashboard },
  { path: 'admin/products', component: AdminProducts },
  { path: 'admin/orders', component: AdminOrders },
  { path: 'admin/customers', component: AdminCustomers },
];
