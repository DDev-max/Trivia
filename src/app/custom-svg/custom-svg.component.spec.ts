import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSVGComponent } from './custom-svg.component';

describe('CustomSVGComponent', () => {
  let component: CustomSVGComponent;
  let fixture: ComponentFixture<CustomSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
