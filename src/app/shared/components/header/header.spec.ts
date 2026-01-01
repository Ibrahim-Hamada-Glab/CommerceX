import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
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

  it('should have accessible labels for account and cart links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const accountLink = compiled.querySelector('.account a[aria-label="Account"]');
    const cartLink = compiled.querySelector('.account a[aria-label="Cart"]');

    expect(accountLink).toBeTruthy();
    expect(cartLink).toBeTruthy();
  });

  it('should have tooltips for account and cart links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const accountLink = compiled.querySelector('.account a[title="Account"]');
    const cartLink = compiled.querySelector('.account a[title="Cart"]');

    expect(accountLink).toBeTruthy();
    expect(cartLink).toBeTruthy();
  });
});
