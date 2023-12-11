import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpageComponent } from './teacherpage.component';

describe('TeacherpageComponent', () => {
  let component: TeacherpageComponent;
  let fixture: ComponentFixture<TeacherpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
