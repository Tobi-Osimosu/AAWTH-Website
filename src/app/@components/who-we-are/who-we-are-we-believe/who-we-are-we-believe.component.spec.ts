import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreWeBelieveComponent } from './who-we-are-we-believe.component';

describe('WhoWeAreWeBelieveComponent', () => {
  let component: WhoWeAreWeBelieveComponent;
  let fixture: ComponentFixture<WhoWeAreWeBelieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreWeBelieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreWeBelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
