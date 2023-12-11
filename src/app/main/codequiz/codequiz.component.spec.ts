import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodequizComponent } from './codequiz.component';

describe('CodequizComponent', () => {
  let component: CodequizComponent;
  let fixture: ComponentFixture<CodequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodequizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
