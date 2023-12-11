import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent {
  hideSignIn: boolean = false;

  constructor(private router: Router) {
    if (localStorage.getItem('UserId') != null) {
      this.hideSignIn = true;
    }
  }

  goToHome() {}

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToQuizzes() {
    this.router.navigate(['/quizzes']);
  }

  goToNotes() {
    this.router.navigate(['/notes']);
  }
}
