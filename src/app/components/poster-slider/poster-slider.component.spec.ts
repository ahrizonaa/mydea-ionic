import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterSliderComponent } from './poster-slider.component';

describe('PosterSliderComponent', () => {
  let component: PosterSliderComponent;
  let fixture: ComponentFixture<PosterSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
