import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentSVGComponent } from './entertainment-svg.component';

describe('EntertainmentSVGComponent', () => {
  let component: EntertainmentSVGComponent;
  let fixture: ComponentFixture<EntertainmentSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntertainmentSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertainmentSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
