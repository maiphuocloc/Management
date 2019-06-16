import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilemembershipComponent } from './profilemembership.component';

describe('ProfilemembershipComponent', () => {
  let component: ProfilemembershipComponent;
  let fixture: ComponentFixture<ProfilemembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilemembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
