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
    if (!target.closest('.sort-dropdown-container')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.focusedOptionIndex = this.sortOptions.findIndex(o => o.label === this.selectedSort);
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.isDropdownOpen = false;
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isDropdownOpen = false;
      return;
    }

    if (!this.isDropdownOpen) {
      if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown') {
        event.preventDefault();
        this.toggleDropdown();
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedOptionIndex = Math.min(this.focusedOptionIndex + 1, this.sortOptions.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedOptionIndex = Math.max(this.focusedOptionIndex - 1, 0);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (this.focusedOptionIndex >= 0) {
        this.selectSort(this.sortOptions[this.focusedOptionIndex]);
      }
    }
  }

  onListKeydown(event: KeyboardEvent) {
     event.stopPropagation(); // Prevent bubbling to button handler if needed, though button handles it all currently
  }
}
