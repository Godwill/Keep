import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})

export class NotesContainerComponent implements OnInit {

  notes = [
    {title: 'This is a note', value: 'Eat some food', color: 'lightblue'},
    {title: 'This is a note', value: 'Read a book', color: 'green'},
    {title: 'This is a note', value: 'Code some more', color: 'yellow'},
    {title: 'This is a note', value: 'Check friends', color: 'red'},
    {title: 'This is a note', value: 'Code some more', color: 'blue'},
    {title: 'This is a note', value: 'Code some more', color: 'blue'}
  ]

  onNoteChecked(i) {
    this.notes.splice(i, 1)
  }

  onCreateNote(note) {
    this.notes.push(note);
  }

  constructor() { }

  ngOnInit() {
  }

}
