import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWhyWeExistComponent } from './home-why-we-exist.component';

describe('HomeWhyWeExistComponent', () => {
  let component: HomeWhyWeExistComponent;
  let fixture: ComponentFixture<HomeWhyWeExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWhyWeExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWhyWeExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
