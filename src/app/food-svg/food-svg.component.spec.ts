import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSVGComponent } from './food-svg.component';

describe('FoodSVGComponent', () => {
  let component: FoodSVGComponent;
  let fixture: ComponentFixture<FoodSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
