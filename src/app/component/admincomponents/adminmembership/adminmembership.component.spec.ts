import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmembershipComponent } from './adminmembership.component';

describe('AdminmembershipComponent', () => {
  let component: AdminmembershipComponent;
  let fixture: ComponentFixture<AdminmembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
