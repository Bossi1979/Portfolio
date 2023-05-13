import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgShapesComponent } from './bg-shapes.component';

describe('BgShapesComponent', () => {
  let component: BgShapesComponent;
  let fixture: ComponentFixture<BgShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgShapesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BgShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
