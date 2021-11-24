import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBrandPersonalityComponent } from './home-brand-personality.component';

describe('HomeBrandPersonalityComponent', () => {
  let component: HomeBrandPersonalityComponent;
  let fixture: ComponentFixture<HomeBrandPersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBrandPersonalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBrandPersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
