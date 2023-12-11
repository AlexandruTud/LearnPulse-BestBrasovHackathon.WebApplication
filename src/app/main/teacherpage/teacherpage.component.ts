import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-teacherpage',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './teacherpage.component.html',
  styleUrl: './teacherpage.component.scss',
})
export class TeacherpageComponent {
  validateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.validateForm = this.formBuilder.group({
      courseTitle: [null, Validators.required],
      duration: [null, Validators.required],
      description: [null, Validators.required],
      points: [null, Validators.required],
      link: [null, Validators.required],
    });
  }

  get courseTitle(): FormControl {
    return this.validateForm.get('courseTitle') as FormControl;
  }

  get duration(): FormControl {
    return this.validateForm.get('duration') as FormControl;
  }

  get description(): FormControl {
    return this.validateForm.get('description') as FormControl;
  }

  get points(): FormControl {
    return this.validateForm.get('points') as FormControl;
  }

  get link(): FormControl {
    return this.validateForm.get('link') as FormControl;
  }

  validForm() {
    return this.validateForm.valid;
  }

  postCourse() {
    const payload = {
      courseTitle: this.courseTitle.value,
      duration: this.duration.value,
      description: this.description.value,
      categoryName: (<HTMLSelectElement>document.getElementById('category'))
        .value,
      postDate: new Date(),
      idUser: localStorage.getItem('UserId'),
      link: this.link.value,
      couseLanguage: (<HTMLSelectElement>document.getElementById('language'))
        .value,
      difficulty: (<HTMLSelectElement>document.getElementById('difficulty'))
        .value,
      points: this.points.value,
      isPublic: true,
    };

    this.mainService.insertCourse(payload).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
