import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeadlinesComponent } from './portfolio-headlines.component';

describe('PortfolioHeadlinesComponent', () => {
  let component: PortfolioHeadlinesComponent;
  let fixture: ComponentFixture<PortfolioHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioHeadlinesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
