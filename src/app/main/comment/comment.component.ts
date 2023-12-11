import { Component, Input } from '@angular/core';
import { MyComment } from '../../../_core/models/Comment';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent {
  @Input() mycomment: MyComment;
}
