import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [],
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.scss',
})
export class QuizzesComponent {
  constructor(private router: Router) {}

  goToCode() {
    this.router.navigate(['quiz/code']);
  }

  goToDataScience() {
    this.router.navigate(['quiz/datascience']);
  }

  goToMath() {
    this.router.navigate(['quiz/math']);
  }
}
