import { Action } from '@ngrx/store'
import { ActionTypes } from './../../actions/notes/note.actions';


export interface State {
  loading: boolean,
  notes: Array<any>;
}

const initialState : State = {
  loading: false,
  notes: []
};

export function reducer(state: State = initialState, action: Action): State{
  console.log("the act" ,action);
  switch (action.type) {
    case ActionTypes.LOAD_NOTES : {
      return {
        loading: true,
        notes: []
      };
    }

    case ActionTypes.LOAD_NOTES_SUCCESS : {
      return {
        loading: false,
        notes: action.payload,
      };
    }

    case ActionTypes.CREATE_NOTE : {
      const { note } = action.payload;

      return {
        loading: state.loading,
        notes: state.notes.map(newNote => {
          if (note.id === newNote.id) {
            return Object.assign({}, newNote, {
              note: note
            });
          }
          return newNote;
        })
      }
    }

    default: {
      return state;
    }

  }
}
