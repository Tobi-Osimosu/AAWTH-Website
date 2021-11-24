import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTheEndGoalComponent } from './home-the-end-goal.component';

describe('HomeTheEndGoalComponent', () => {
  let component: HomeTheEndGoalComponent;
  let fixture: ComponentFixture<HomeTheEndGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTheEndGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTheEndGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
