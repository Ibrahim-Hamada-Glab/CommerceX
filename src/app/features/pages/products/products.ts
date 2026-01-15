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

  get activeOptionId(): string | null {
    return this.isDropdownOpen && this.focusedIndex >= 0
      ? `sort-option-${this.focusedIndex}`
      : null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sort-wrapper')) {
      this.isDropdownOpen = false;
      this.focusedIndex = -1;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      const index = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      this.focusedIndex = index >= 0 ? index : 0;
    } else {
      this.focusedIndex = -1;
    }
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
    this.focusedIndex = -1;
  }

  onKeydown(event: KeyboardEvent) {
    if (!this.isDropdownOpen) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        this.toggleDropdown();
      }
      return;
    }

    switch (event.key) {
      case 'Escape':
        this.isDropdownOpen = false;
        this.focusedIndex = -1;
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
        if (this.focusedIndex >= 0) {
          this.selectSort(this.sortOptions[this.focusedIndex]);
        }
        break;
    }
  }
}
