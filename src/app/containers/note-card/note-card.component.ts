import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'note-card',
  templateUrl: 'note-card.component.html',
  styleUrls: ['note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input() note = {};
  @Output() checked = new EventEmitter();

  onChecked() {
    this.checked.next(this.note);
  }

  showCheck: boolean = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }


  constructor() { }

  ngOnInit() {
  }

}
