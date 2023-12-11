import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CoursesComponent } from './courses/courses.component';
import { NotesComponent } from './notes/notes.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TeacherpageComponent } from './teacherpage/teacherpage.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { MathquizComponent } from './mathquiz/mathquiz.component';
import { DatasciencequizComponent } from './datasciencequiz/datasciencequiz.component';
import { CodequizComponent } from './codequiz/codequiz.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'coursedetails', component: CoursedetailsComponent },
  { path: 'teacherpage', component: TeacherpageComponent },
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'quiz/math', component: MathquizComponent },
  { path: 'quiz/datascience', component: DatasciencequizComponent },
  { path: 'quiz/code', component: CodequizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
