import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFeatureComponent } from './star-feature.component';

describe('StarFeatureComponent', () => {
  let component: StarFeatureComponent;
  let fixture: ComponentFixture<StarFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
