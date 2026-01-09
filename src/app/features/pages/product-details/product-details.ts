import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  images: string[] = [
    'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/amsterdamslide__800x600.jpg',
    'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/amsterdamslide__800x600.jpg',
    'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/amsterdamslide__800x600.jpg',
  ];

  selectedImageIndex = 0;
  quantity = 1;
  activeTab = 'description';

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  prevImage(): void {
    this.selectedImageIndex = this.selectedImageIndex > 0
      ? this.selectedImageIndex - 1
      : this.images.length - 1;
  }

  nextImage(): void {
    this.selectedImageIndex = this.selectedImageIndex < this.images.length - 1
      ? this.selectedImageIndex + 1
      : 0;
  }

  decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQty(): void {
    if (this.quantity < 10) {
      this.quantity++;
    }
  }
}
