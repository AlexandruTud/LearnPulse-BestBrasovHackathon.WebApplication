import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentComponent } from '../comment/comment.component';
import { MyComment } from '../../../_core/models/Comment';
import { CommonModule } from '@angular/common';
import { Course } from '../../../_core/models/Course';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-coursedetails',
  standalone: true,
  imports: [CommentComponent, CommonModule],
  templateUrl: './coursedetails.component.html',
  styleUrl: './coursedetails.component.scss',
})
export class CoursedetailsComponent {
  comments: MyComment[] = [];
  rate_evaluation = 0;
  comment_text = '';
  course: Course;
  courseId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) {
    activatedRoute.queryParams.subscribe((response) => {
      if (response['courseId'] != null) {
        this.courseId = parseInt(response['courseId']);
      }
    });
  }

  ngOnInit(): void {
    if (!isNaN(this.courseId)) {
      this.mainService.getAllCourses().subscribe({
        next: (response) => {
          for (let i = 0; i < response.length; i++) {
            if (response[i].idCourse == this.courseId) {
              this.course = response[i];
              break;
            }
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.router.navigate(['/courses']);
    }

    this.mainService.getComments(this.courseId).subscribe({
      next: (response) => {
        this.comments = response;
        console.log(this.comments);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  rate(data) {
    for (let i = 0; i < data; i++) {
      var star = document.getElementById('star_' + (i + 1));
      star.classList.remove('star');
      star.classList.add('star.rated');
    }
    for (let i = data; i < 5; i++) {
      var star = document.getElementById('star_' + (i + 1));
      star.classList.remove('star.rated');
      star.classList.add('star');
    }
    this.rate_evaluation = data;
  }

  getPublic() {
    if (this.course.isPublic) return 'Public';
    else return 'Private';
  }

  getTextArea(event) {
    this.comment_text = event.target.value;
  }

  postComment() {
    const payload = {
      idUser: localStorage.getItem('UserId'),
      idCourse: this.courseId,
      comment: this.comment_text,
    };
    this.mainService.addComment(payload).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
