import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreSectionComponent } from './who-we-are-section-component';

describe('WhoWeAreSectionComponent', () => {
  let component: WhoWeAreSectionComponent;
  let fixture: ComponentFixture<WhoWeAreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoWeAreSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoWeAreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
