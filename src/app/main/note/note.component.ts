import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../../_core/models/Note';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
  @Input() note: Note;
  @Output() action = new EventEmitter<string>();

  editOrDelete(value: string) {
    this.action.emit(value);
  }
}
