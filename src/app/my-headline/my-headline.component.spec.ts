import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeadlineComponent } from './my-headline.component';

describe('MyHeadlineComponent', () => {
  let component: MyHeadlineComponent;
  let fixture: ComponentFixture<MyHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyHeadlineComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
