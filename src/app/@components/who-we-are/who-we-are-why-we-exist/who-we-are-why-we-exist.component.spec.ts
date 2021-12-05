import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreWhyWeExistComponent } from './who-we-are-why-we-exist.component';

describe('WhoWeAreWhyWeExistComponent', () => {
  let component: WhoWeAreWhyWeExistComponent;
  let fixture: ComponentFixture<WhoWeAreWhyWeExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreWhyWeExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreWhyWeExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
