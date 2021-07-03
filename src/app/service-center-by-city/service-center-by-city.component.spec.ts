import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCenterByCityComponent } from './service-center-by-city.component';

describe('ServiceCenterByCityComponent', () => {
  let component: ServiceCenterByCityComponent;
  let fixture: ComponentFixture<ServiceCenterByCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCenterByCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCenterByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
