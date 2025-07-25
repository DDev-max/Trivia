import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSVGComponent } from './geo-svg.component';

describe('GeoSVGComponent', () => {
  let component: GeoSVGComponent;
  let fixture: ComponentFixture<GeoSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
