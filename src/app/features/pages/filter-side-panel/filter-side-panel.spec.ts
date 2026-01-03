import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSidePanel } from './filter-side-panel';

describe('FilterSidePanel', () => {
  let component: FilterSidePanel;
  let fixture: ComponentFixture<FilterSidePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSidePanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSidePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
