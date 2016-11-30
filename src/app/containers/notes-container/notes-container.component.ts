import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})
export class NotesContainerComponent implements OnInit {

  note = {title: 'This is a note', value: 'Eat some food'};

  constructor() { }

  ngOnInit() {
  }

}
