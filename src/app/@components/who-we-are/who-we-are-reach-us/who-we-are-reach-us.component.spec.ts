import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreReachUsComponent } from './who-we-are-reach-us.component';

describe('WhoWeAreReachUsComponent', () => {
  let component: WhoWeAreReachUsComponent;
  let fixture: ComponentFixture<WhoWeAreReachUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreReachUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreReachUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
