import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagexComponent } from './managex.component';

describe('ManagexComponent', () => {
  let component: ManagexComponent;
  let fixture: ComponentFixture<ManagexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
