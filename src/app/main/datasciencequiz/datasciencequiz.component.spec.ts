import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasciencequizComponent } from './datasciencequiz.component';

describe('DatasciencequizComponent', () => {
  let component: DatasciencequizComponent;
  let fixture: ComponentFixture<DatasciencequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatasciencequizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatasciencequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
