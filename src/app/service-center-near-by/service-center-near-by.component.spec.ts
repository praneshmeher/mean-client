import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterNearByComponent } from './service-center-near-by.component';

describe('ServiceCenterNearByComponent', () => {
  let component: ServiceCenterNearByComponent;
  let fixture: ComponentFixture<ServiceCenterNearByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCenterNearByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCenterNearByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
