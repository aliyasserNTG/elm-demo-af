import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartServiceComponent } from './start-service-component';

describe('StartServiceComponent', () => {
  let component: StartServiceComponent;
  let fixture: ComponentFixture<StartServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
