import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathquizComponent } from './mathquiz.component';

describe('MathquizComponent', () => {
  let component: MathquizComponent;
  let fixture: ComponentFixture<MathquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathquizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
