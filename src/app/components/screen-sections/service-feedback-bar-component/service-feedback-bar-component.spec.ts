import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFeedbackBarComponent } from './service-feedback-bar-component';

describe('ServiceFeedbackBarComponent', () => {
  let component: ServiceFeedbackBarComponent;
  let fixture: ComponentFixture<ServiceFeedbackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFeedbackBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFeedbackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
