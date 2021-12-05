import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreFoundersComponent } from './who-we-are-founders.component';

describe('WhoWeAreFoundersComponent', () => {
  let component: WhoWeAreFoundersComponent;
  let fixture: ComponentFixture<WhoWeAreFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreFoundersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
