import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhoWeServeComponent } from './home-who-we-serve.component';

describe('HomeWhoWeServeComponent', () => {
  let component: HomeWhoWeServeComponent;
  let fixture: ComponentFixture<HomeWhoWeServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhoWeServeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhoWeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
