import { Action } from '@ngrx/store'

export const ActionTypes = {
  LOAD_NOTES: 'LOAD_NOTES',
  LOAD_NOTES_SUCCESS: 'LOAD_NOTES_SUCCESS',
  CREATE_NOTE: 'CREATE_NOTE',
  COMPLETE_NOTE: 'COMPLETE_NOTE',
};


export function loadNotes(): Action {
  return {
    type: ActionTypes.LOAD_NOTES,
    payload: {},
  }
}

export function loadNotesSuccess(notes): Action {
  return {
    type: ActionTypes.LOAD_NOTES_SUCCESS,
    payload: notes,
  }
}

export function completeNote(): Action {
  return {
    type: ActionTypes.COMPLETE_NOTE,
    payload: {},
  }
}

export function createNote(note): Action {
  return {
    type: ActionTypes.CREATE_NOTE,
    payload: { note },
  }
}
