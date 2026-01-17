import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
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
  activeOptionId = '';

  @ViewChild('sortTrigger') sortTrigger!: ElementRef<HTMLButtonElement>;

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
      this.closeDropdown();
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.focusedOptionIndex = this.sortOptions.findIndex(o => o.label === this.selectedSort);
      if (this.focusedOptionIndex === -1) this.focusedOptionIndex = 0;
      this.updateActiveOptionId();
    } else {
      this.focusedOptionIndex = -1;
      this.activeOptionId = '';
    }
  }

  closeDropdown() {
    this.isDropdownOpen = false;
    this.focusedOptionIndex = -1;
    this.activeOptionId = '';
  }

  selectSort(option: SortOption) {
    this.selectedSort = option.label;
    this.closeDropdown();
    // Return focus to trigger after selection
    // Note: In a real app we might need ChangeDetectorRef or setTimeout if ViewChild is not available immediately
  }

  onTriggerKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!this.isDropdownOpen) {
        this.toggleDropdown();
      } else {
         // If already open, move focus to list handling?
         // Actually if we implement aria-activedescendant on the button itself or the listbox,
         // usually focus stays on the button (trigger).
         // Let's implement focus management where focus stays on the trigger
         // and we manage active descendant.

         // But wait, the standard pattern often moves focus to the listbox OR keeps it on textbox (combobox).
         // Here it's a button trigger.
         // Let's forward key events to list navigation.
         this.handleListNavigation(event);
      }
    } else if (event.key === 'Escape') {
      this.closeDropdown();
    } else if (event.key === 'ArrowUp') {
       event.preventDefault();
       if (!this.isDropdownOpen) {
           this.toggleDropdown();
       }
       this.handleListNavigation(event);
    }
  }

  // Actually, since focus stays on the button, we can handle navigation here.
  // But wait, I added (keydown)="onListboxKeydown($event)" on the UL.
  // The UL won't receive focus if I don't move focus to it.
  // Accessibility pattern:
  // Option A: Focus moves to listbox (role="listbox"). Button opens it and moves focus.
  // Option B: Focus stays on button (role="combobox"). aria-activedescendant points to options.

  // I used role="combobox" on the button (trigger).
  // So I should keep focus on the button and use aria-activedescendant.
  // The UL does not need to be focused.

  // I will remove onListboxKeydown and handle everything in onTriggerKeydown.

  handleListNavigation(event: KeyboardEvent) {
      if (!this.isDropdownOpen) return;

      if (event.key === 'ArrowDown') {
          this.focusedOptionIndex = (this.focusedOptionIndex + 1) % this.sortOptions.length;
          this.updateActiveOptionId();
      } else if (event.key === 'ArrowUp') {
          this.focusedOptionIndex = (this.focusedOptionIndex - 1 + this.sortOptions.length) % this.sortOptions.length;
          this.updateActiveOptionId();
      } else if (event.key === 'Enter' || event.key === ' ') {
          if (this.focusedOptionIndex >= 0) {
              this.selectSort(this.sortOptions[this.focusedOptionIndex]);
          }
      } else if (event.key === 'Tab') {
          this.closeDropdown();
      }
  }

  updateActiveOptionId() {
      this.activeOptionId = 'option-' + this.focusedOptionIndex;
  }

  // Remove onListboxKeydown since we handle it on trigger
  onListboxKeydown(event: KeyboardEvent) {
      // Unused if we keep focus on trigger
  }
}
