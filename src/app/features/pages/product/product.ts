import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  constructor(private RouterOutlet: Router ) {
    
  }

  openProductDetails(){
    this.RouterOutlet.navigate(['/product', 1]);
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.openProductDetails();
    }
  }
}
