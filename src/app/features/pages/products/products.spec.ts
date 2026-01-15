import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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

  it('should toggle dropdown on click', () => {
    const button = fixture.debugElement.query(By.css('button.sort-dropdown'));
    expect(component.isDropdownOpen).toBeFalse();

    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.isDropdownOpen).toBeTrue();
    expect(button.attributes['aria-expanded']).toBe('true');

    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.isDropdownOpen).toBeFalse();
    expect(button.attributes['aria-expanded']).toBe('false');
  });

  it('should handle keyboard navigation', () => {
    const button = fixture.debugElement.query(By.css('button.sort-dropdown'));

    // Open with Enter
    button.triggerEventHandler('keydown', { key: 'Enter', preventDefault: () => {} });
    fixture.detectChanges();
    expect(component.isDropdownOpen).toBeTrue();
    expect(component.focusedIndex).toBe(0); // Starts at selected option (Popularity = 0)

    // Navigate down
    button.triggerEventHandler('keydown', { key: 'ArrowDown', preventDefault: () => {} });
    fixture.detectChanges();
    expect(component.focusedIndex).toBe(1);
    expect(component.activeOptionId).toBe('sort-option-1');

    // Select with Enter
    button.triggerEventHandler('keydown', { key: 'Enter', preventDefault: () => {} });
    fixture.detectChanges();
    expect(component.isDropdownOpen).toBeFalse();
    expect(component.selectedSort).toBe(component.sortOptions[1].label);
  });
});
