import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaitComponent } from './portait.component';

describe('PortaitComponent', () => {
  let component: PortaitComponent;
  let fixture: ComponentFixture<PortaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortaitComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
