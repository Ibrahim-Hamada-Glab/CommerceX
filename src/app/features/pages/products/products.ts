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
  focusedOptionIndex = -1;

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
      // Find index of currently selected option
      const index = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      this.focusedOptionIndex = index >= 0 ? index : 0;
    } else {
      this.focusedOptionIndex = -1;
    }
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
    this.focusedOptionIndex = -1;
  }

  onTriggerKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.isDropdownOpen) {
        if (this.focusedOptionIndex >= 0) {
          this.selectSort(this.sortOptions[this.focusedOptionIndex]);
        } else {
          this.toggleDropdown();
        }
      } else {
        this.toggleDropdown();
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!this.isDropdownOpen) {
        this.toggleDropdown();
      } else {
        this.focusedOptionIndex = Math.min(this.focusedOptionIndex + 1, this.sortOptions.length - 1);
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.isDropdownOpen) {
        this.focusedOptionIndex = Math.max(this.focusedOptionIndex - 1, 0);
      }
    } else if (event.key === 'Escape') {
      this.isDropdownOpen = false;
      this.focusedOptionIndex = -1;
    } else if (event.key === 'Tab') {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false;
      }
    }
  }
}
