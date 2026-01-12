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
  activeIndex = -1;
  dropdownId = 'sort-dropdown-list';

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
    if (!target.closest('.sort-wrapper')) {
      this.closeDropdown();
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      // Find the index of the currently selected sort option to highlight it
      this.activeIndex = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      if (this.activeIndex === -1) this.activeIndex = 0;
    } else {
      this.activeIndex = -1;
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.activeIndex = -1;
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.closeDropdown();
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
      case 'ArrowDown':
        event.preventDefault();
        this.activeIndex = (this.activeIndex + 1) % this.sortOptions.length;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex = (this.activeIndex - 1 + this.sortOptions.length) % this.sortOptions.length;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.activeIndex >= 0) {
          this.selectSort(this.sortOptions[this.activeIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.closeDropdown();
        break;
      case 'Home':
        event.preventDefault();
        this.activeIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        this.activeIndex = this.sortOptions.length - 1;
        break;
    }
  }
}
