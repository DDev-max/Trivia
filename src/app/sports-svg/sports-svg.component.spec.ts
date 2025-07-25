import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsSVGComponent } from './sports-svg.component';

describe('SportsSVGComponent', () => {
  let component: SportsSVGComponent;
  let fixture: ComponentFixture<SportsSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
