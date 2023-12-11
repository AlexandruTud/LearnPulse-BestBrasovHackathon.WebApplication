import { Component, Input } from '@angular/core';
import { Course } from '../../../_core/models/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  @Input() course: Course;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getPublicText() {
    if (this.course.isPublic) return 'PUBLIC';
    else return 'PRIVATE';
  }

  goToCourse() {
    this.router.navigate(['coursedetails'], {
      queryParams: {
        courseId: this.course.idCourse,
      },
    });
  }
}
