import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowWeBehaveComponent } from './home-how-we-behave.component';

describe('HomeHowWeBehaveComponent', () => {
  let component: HomeHowWeBehaveComponent;
  let fixture: ComponentFixture<HomeHowWeBehaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHowWeBehaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowWeBehaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
