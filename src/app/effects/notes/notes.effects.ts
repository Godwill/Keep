import 'rxjs/add/operator/mergeMap'
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import {ActionTypes, loadNotesSuccess} from './../../actions/notes/note.actions';
import { NoteService } from './../../services/notes/note.service';


@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private noteService: NoteService
  ){}

  @Effect() loadNotes$ = this.actions$
    .ofType(ActionTypes.LOAD_NOTES)
    .mergeMap(() => this.noteService.getNotes())
    .map(notes => loadNotesSuccess(notes));

  @Effect({dispatch: false}) createNote$ = this.actions$
    .ofType(ActionTypes.CREATE_NOTE)
    .mergeMap(action => this.noteService.createNote(action.payload.note))
    .mergeMap(() => this.noteService.getNotes())
    .map(notes => loadNotesSuccess(notes));
}
