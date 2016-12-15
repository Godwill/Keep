import {Component, OnInit, PipeTransform, Pipe} from '@angular/core';
import { NoteService } from "../../services/notes/note.service";
import { Store} from '@ngrx/store';
import {loadNotes, createNote} from "../../actions/notes/note.actions";
import { Observable } from "rxjs/Observable";
import {NotesModel} from "../../models/notes.models";
import {State} from "../../reducers/notes/notes.reducer";


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}


@Component({
  selector: 'notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})

export class NotesContainerComponent implements OnInit {

  _notes= [];

  notes$: Observable<NotesModel[]>;

  constructor(private noteService: NoteService, public store: Store<State>) {
    store.dispatch(loadNotes());

    this.notes$ = store.select('notes')
      .map((state: any) => state.notes)
    ;

  }

  onNoteChecked(note) {
    this.noteService.completeNote(note)
      .subscribe(note => {
        const i = this._notes.findIndex(localNote => localNote.id === note.id);
        this._notes.splice(i, 1)
      })
  }

  onCreateNote(note) {
    this.store.dispatch(createNote(note))
  }

  ngOnInit() {
    // this.store.dispatch(loadNotes());
    //
    // this.notes = this.store.select('notes')
    //   .map((state: any) => state.notes);
    // //
    // // this.noteService.getNotes()
    //   .subscribe(res => this.notes = res.data);
  }

}

