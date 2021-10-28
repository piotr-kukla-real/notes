import { format } from 'date-fns';
import type { Note, Notes } from '.';

const reducer = (notes: Notes, action: Action): Notes => {
  switch (action.type) {
    case 'ADD': {
      const { title, note } = action.payload;
      const id = Date.now();
      const date = format(id, 'dd/MM/yyyy, HH:mm');
      return [{ title, note, id, date }, ...notes];
    }
    case 'REMOVE':
      return notes.filter((item) => item.id !== action.payload);
    case 'EDIT': {
      const { title, note, id } = action.payload;
      return notes.map((item) => {
        if (item.id === id) {
          const editNote = { ...item, title, note };
          return editNote;
        }
        return item;
      });
    }
    default:
      return notes;
  }
};

interface Add {
  type: 'ADD';
  payload: Pick<Note, 'title' | 'note'>;
}

interface Remove {
  type: 'REMOVE';
  payload: number;
}

interface Edit {
  type: 'EDIT';
  payload: Omit<Note, 'date'>;
}

export type Action = Add | Remove | Edit;

export default reducer;
