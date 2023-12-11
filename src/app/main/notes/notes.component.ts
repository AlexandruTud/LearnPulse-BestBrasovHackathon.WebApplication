import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { CommonModule } from '@angular/common';
import { Note } from '../../../_core/models/Note';
import { MainService } from '../../../_core/services/main.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [NoteComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent {
  notes: Note[] = [];
  deleting = false;
  editing = false;
  adding = false;
  note_id = 0;

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.mainService.getNotes(localStorage.getItem('UserId')).subscribe({
      next: (response) => {
        console.log(response);
        this.notes = response;
      },
      error: (response) => {},
    });
  }

  addNote() {
    const payload = {
      idUser: parseInt(localStorage.getItem('UserId')),
      noteTitle: (<HTMLInputElement>document.getElementById('add_input_title'))
        .value,
      noteText: (<HTMLTextAreaElement>document.getElementById('add_input_text'))
        .value,
    };

    this.mainService.insertNote(payload).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
    });

    this.notes.push({
      idUser: payload.idUser,
      noteTitle: payload.noteTitle,
      noteText: payload.noteText,
    });
  }

  editNote() {
    const payload = {
      idNote: this.note_id,
      newNoteTitle: (<HTMLInputElement>(
        document.getElementById('edit_input_title')
      )).value,
      newNoteText: (<HTMLTextAreaElement>(
        document.getElementById('edit_input_text')
      )).value,
    };

    this.mainService.updateNote(payload).subscribe({
      next: () => {},
      error: (error) => {
        console.log(error);
      },
    });

    this.mainService.getNotes(localStorage.getItem('UserId')).subscribe({
      next: (response) => {
        console.log(response);
        this.notes = response;
      },
      error: (response) => {},
    });
  }

  action(value) {
    if (value.toLowerCase().includes('delete')) {
      this.note_id = value.substring(6);
      this.deleting = true;
    } else if (value.toLowerCase().includes('edit')) {
      this.note_id = value.substring(4);
      this.editing = true;
    }
  }

  delete() {
    console.log(this.note_id);
    this.mainService.deleteNote(this.note_id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
