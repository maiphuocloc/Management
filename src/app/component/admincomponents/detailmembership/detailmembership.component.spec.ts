import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmembershipComponent } from './detailmembership.component';

describe('DetailmembershipComponent', () => {
  let component: DetailmembershipComponent;
  let fixture: ComponentFixture<DetailmembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
