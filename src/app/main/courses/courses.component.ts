import { Component } from '@angular/core';
import { Course } from '../../../_core/models/Course';
import { CourseComponent } from '../course/course.component';
import { CommonModule } from '@angular/common';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseComponent, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  courses: Course[] = [];
  display_courses: Course[] = [];
  search_input = document.getElementById('search_input');

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getAllCourses().subscribe({
      next: (response) => {
        this.courses = response;
        console.log(this.courses);
      },
      error: (error) => {
        console.log(error);
      },
    });

    for (let i = 0; i < this.courses.length; i++) {
      this.display_courses[i] = this.courses[i];
    }

    setInterval(() => this.search(), 500);
  }

  search() {
    let searched_text = (<HTMLInputElement>this.search_input).value;
    var j = 0;
    this.display_courses = [];
    for (let i = 0; i < this.courses.length; i++) {
      if (
        this.courses[i].courseTitle
          .toLowerCase()
          .includes(searched_text.toLowerCase())
      ) {
        this.display_courses[j] = this.courses[i];
        j++;
      }
    }
  }
}
