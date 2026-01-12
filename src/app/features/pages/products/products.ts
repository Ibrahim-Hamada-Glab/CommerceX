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
    if (!target.closest('.sort-dropdown')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      // Find index of currently selected item
      this.focusedIndex = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      if (this.focusedIndex === -1) this.focusedIndex = 0;
    }
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
  }

  handleKeydown(event: KeyboardEvent) {
    if (!this.isDropdownOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        this.toggleDropdown();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        this.isDropdownOpen = false;
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.focusedIndex = (this.focusedIndex + 1) % this.sortOptions.length;
        event.preventDefault();
        break;
      case 'ArrowUp':
        this.focusedIndex = (this.focusedIndex - 1 + this.sortOptions.length) % this.sortOptions.length;
        event.preventDefault();
        break;
      case 'Enter':
      case ' ':
        if (this.focusedIndex >= 0) {
          this.selectSort(this.sortOptions[this.focusedIndex]);
        }
        event.preventDefault();
        break;
      case 'Tab':
        this.isDropdownOpen = false;
        break;
    }
  }
}
