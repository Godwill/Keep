import { Component, OnInit } from '@angular/core';
import {NoteService} from "../../services/notes/note.service";

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})

export class NotesContainerComponent implements OnInit {

  notes = [
    // {title: 'This is a note', value: 'Eat some food', color: 'lightblue'},
    // {title: 'This is a note', value: 'Read a book', color: 'green'},
    // {title: 'This is a note', value: 'Code some more', color: 'yellow'},
    // {title: 'This is a note', value: 'Check friends', color: 'red'},
    // {title: 'This is a note', value: 'Code some more', color: 'blue'},
  ];

  constructor(private noteService: NoteService) { }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
      .subscribe(note => {
        const i = this.notes.findIndex(localNote => localNote.id === note.id);
        this.notes.splice(i, 1)
      })
  }

  onCreateNote(note) {
    this.noteService.createNote(note)
      .subscribe(note=> {
        this.notes.push(note);
      })
  }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe(res => this.notes = res.data);
  }

}
