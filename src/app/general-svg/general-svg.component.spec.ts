import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSVGComponent } from './general-svg.component';

describe('GeneralSVGComponent', () => {
  let component: GeneralSVGComponent;
  let fixture: ComponentFixture<GeneralSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
