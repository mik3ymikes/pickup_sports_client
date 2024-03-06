import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDdetailsComponent } from './event-ddetails.component';

describe('EventDdetailsComponent', () => {
  let component: EventDdetailsComponent;
  let fixture: ComponentFixture<EventDdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventDdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
