import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'note-creator',
  templateUrl: 'note-creator.component.html',
  styleUrls: ['note-creator.component.css']
})

export class NoteCreatorComponent implements OnInit {

  @Output() createNote = new EventEmitter();

  newNote = {
    title:'',
    value:'',
    color: '#fff'
  };

  colors: string[] =  ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];
  fullForm: boolean = false;

  toggle(value: boolean) {
    this.fullForm = value;
  }

  onCreateNote() {
    const {title, value, color} = this.newNote;

    if(title && value){
      this.createNote.next({title, value, color});
    }

    this.reset();
  }

  onColorSelect(color: string) {
    this.newNote.color = color;
  }


  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: '#fff'
    };

    this.toggle(false);
  }

  constructor() { }

  ngOnInit() {
  }

}
