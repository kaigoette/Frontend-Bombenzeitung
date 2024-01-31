import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCookieServiceServiceComponent } from './app-cookie-service-service.component';

describe('AppCookieServiceServiceComponent', () => {
  let component: AppCookieServiceServiceComponent;
  let fixture: ComponentFixture<AppCookieServiceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCookieServiceServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppCookieServiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
