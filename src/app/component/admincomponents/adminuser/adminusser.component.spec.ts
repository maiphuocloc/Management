import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusserComponent } from './adminusser.component';

describe('AdminusserComponent', () => {
  let component: AdminusserComponent;
  let fixture: ComponentFixture<AdminusserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
