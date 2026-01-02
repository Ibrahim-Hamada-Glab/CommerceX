import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have accessible account link', () => {
    const accountLink = fixture.debugElement.query(By.css('.account a:first-child'));
    expect(accountLink).toBeTruthy();
    expect(accountLink.nativeElement.getAttribute('aria-label')).toBe('User Account');
    expect(accountLink.nativeElement.getAttribute('title')).toBe('User Account');
  });

  it('should have accessible cart link', () => {
    const cartLink = fixture.debugElement.query(By.css('.account a:last-child'));
    expect(cartLink).toBeTruthy();
    expect(cartLink.nativeElement.getAttribute('aria-label')).toBe('Shopping Cart');
    expect(cartLink.nativeElement.getAttribute('title')).toBe('Shopping Cart');
  });
});
