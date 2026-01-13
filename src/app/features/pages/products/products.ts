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
  focusedIndex = -1;

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
    if (!target.closest('.sort-dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.focusedIndex = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      if (this.focusedIndex === -1) this.focusedIndex = 0;
    }
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.isDropdownOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        this.toggleDropdown();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.isDropdownOpen = false;
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.focusedIndex = (this.focusedIndex + 1) % this.sortOptions.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusedIndex = (this.focusedIndex - 1 + this.sortOptions.length) % this.sortOptions.length;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.focusedIndex >= 0 && this.focusedIndex < this.sortOptions.length) {
          this.selectSort(this.sortOptions[this.focusedIndex]);
        }
        break;
      case 'Tab':
        this.isDropdownOpen = false;
        break;
    }
  }
}
