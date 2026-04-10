import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRatingComponent } from './service-rating-component';

describe('ServiceRatingComponent', () => {
  let component: ServiceRatingComponent;
  let fixture: ComponentFixture<ServiceRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
