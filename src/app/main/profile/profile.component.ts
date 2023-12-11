import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  email = '';
  firstName = '';
  lastName = '';
  role = 0;

  constructor(private router: Router, private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService
      .getUserInfo(parseInt(localStorage.getItem('UserId')))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.email = response.email;
          this.firstName = response.firstName;
          this.lastName = response.lastName;
          this.role = response.idRole;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  verifyAccount(data) {
    const payload = {
      to: 'alexandrukeryx%40gmail.com',
      subject: 'subject',
      body: 'body',
    };
    this.mainService
      .sendEmail(payload.to, payload.subject, payload.body)
      .subscribe({
        next: (response) => {
          const new_payload = {
            userId: parseInt(localStorage.getItem('UserId')),
            roleId: data,
          };

          this.mainService.updateRole(new_payload).subscribe({
            next: (response) => {
              console.log(response);
            },
            error: (error) => {
              console.log(error);
            },
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getRole() {
    if (this.role == 1) return 'User';
    else if (this.role == 2) return 'Student';
    else if (this.role == 3) return 'Profesor';
    return '';
  }

  signOut() {
    localStorage.removeItem('UserId');
    this.router.navigate(['']);
  }
}
