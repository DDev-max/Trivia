import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySVGComponent } from './history-svg.component';

describe('HistorySVGComponent', () => {
  let component: HistorySVGComponent;
  let fixture: ComponentFixture<HistorySVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorySVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorySVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
