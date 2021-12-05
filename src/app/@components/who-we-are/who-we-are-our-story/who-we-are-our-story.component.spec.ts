import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeAreOurStoryComponent } from './who-we-are-our-story.component';

describe('WhoWeAreOurStoryComponent', () => {
  let component: WhoWeAreOurStoryComponent;
  let fixture: ComponentFixture<WhoWeAreOurStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWeAreOurStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeAreOurStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
