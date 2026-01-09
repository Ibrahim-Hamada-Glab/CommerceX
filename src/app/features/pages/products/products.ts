import { Component, HostListener } from '@angular/core';
import { Product } from "../product/product";

interface SortOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-products',
  imports: [Product],
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  isDropdownOpen = false;
  selectedSort = 'Popularity';

  sortOptions: SortOption[] = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'rating', label: 'Rating' },
    { value: 'latest', label: 'Latest' },
    { value: 'price-low-high', label: 'Price: Low to High' },
    { value: 'price-high-low', label: 'Price: High to Low' }
  ];

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
  }
}
