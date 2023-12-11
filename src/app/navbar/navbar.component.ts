import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MainService } from '../../_core/services/main.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  hideTeacherPage: boolean = true;
  hideProfile: boolean = true;

  constructor(private router: Router, private mainService: MainService) {
    var userId = localStorage.getItem('UserId');
    if (userId != null) {
      this.hideProfile = false;
      mainService.getRole(userId).subscribe({
        next: (response) => {
          if (response == 3) {
            this.hideTeacherPage = false;
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      this.hideProfile = false;
    }

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (window.localStorage.getItem('UserId') == null) {
          this.hideProfile = true;
        } else {
          this.hideProfile = false;
        }
      }
    });
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToCourses() {
    this.router.navigate(['/courses']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToQuizzes() {
    this.router.navigate(['/quizzes']);
  }

  goToNotes() {
    this.router.navigate(['/notes']);
  }

  goToLeaderboard() {
    this.router.navigate(['/leaderboard']);
  }

  goToTeacherPage() {
    this.router.navigate(['/teacherpage']);
  }

  search(event) {}
}
