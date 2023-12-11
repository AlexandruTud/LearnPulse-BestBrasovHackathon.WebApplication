import { Component } from '@angular/core';
import { UserLeaderboard } from '../../../_core/models/UserLeaderboard';
import { MainService } from '../../../_core/services/main.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  users: UserLeaderboard[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getTopUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
