import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetailsComponent } from './new-details.component';

describe('NewDetailsComponent', () => {
  let component: NewDetailsComponent;
  let fixture: ComponentFixture<NewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDetailsComponent]
    });
    fixture = TestBed.createComponent(NewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
