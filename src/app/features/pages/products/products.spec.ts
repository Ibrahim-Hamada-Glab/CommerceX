import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown on Enter key', () => {
    component.isDropdownOpen = false;
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.onKeydown(event);
    expect(component.isDropdownOpen).toBeTrue();
  });

  it('should close dropdown on Escape key', () => {
    component.isDropdownOpen = true;
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    component.onKeydown(event);
    expect(component.isDropdownOpen).toBeFalse();
  });

  it('should navigate options with Arrow keys', () => {
    component.isDropdownOpen = true;
    component.focusedOptionIndex = 0;

    // Arrow Down
    const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    component.onKeydown(eventDown);
    expect(component.focusedOptionIndex).toBe(1);

    // Arrow Up
    const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    component.onKeydown(eventUp);
    expect(component.focusedOptionIndex).toBe(0);
  });

  it('should select option on Enter key', () => {
    component.isDropdownOpen = true;
    component.focusedOptionIndex = 1; // 'Rating'
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.onKeydown(event);
    expect(component.selectedSort).toBe('Rating');
    expect(component.isDropdownOpen).toBeFalse();
  });
});
