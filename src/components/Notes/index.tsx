import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { notesPerPage } from 'utils/settings';
import reducer, { Action } from './reducer';

const initValue = (): Notes => {
  const check = localStorage.getItem('notes');
  if (check) {
    return JSON.parse(check);
  }
  localStorage.setItem('notes', JSON.stringify([]));
  return [];
};

export const NotesContext = createContext<Context | null>(null);

export const useNotes = () => {
  const context = useContext(NotesContext);
  return context;
};

export const NotesProvider: React.FC = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, null, initValue);

  const [search, setSearch] = useState<RegExp | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const findNote = (id: number) => {
    return notes.find((item) => item.id === id);
  };

  const filteredNotes = search
    ? notes.filter((item) => search.test(item.title) || search.test(item.note))
    : notes;

  const maxPage = Math.ceil(filteredNotes.length / notesPerPage) || 1;

  const start = currentPage * notesPerPage - notesPerPage;
  const end = start + notesPerPage;

  const slicedNotes = filteredNotes.slice(start, end);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const stringifiedNotes = JSON.stringify(notes);
    localStorage.setItem('notes', stringifiedNotes);
  }, [notes]);

  const changePage: ChangePage = (page) => setCurrentPage(page);

  const searchNotes: SearchNotes = (searchText) => {
    setSearch(searchText ? new RegExp(searchText, 'i') : null);
    setCurrentPage(1);
  };

  const value: Context = {
    notes: slicedNotes,
    dispatch,
    changePage,
    searchNotes,
    findNote,
    info: {
      currentPage,
      maxPage,
    },
  };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};

export interface Note {
  title: string;
  note: string;
  date: string;
  id: number;
}

export type Notes = Note[];

export interface Context {
  notes: Notes;
  dispatch: React.Dispatch<Action>;
  changePage: ChangePage;
  searchNotes: SearchNotes;
  findNote: FindNote;
  info: Info;
}

interface ChangePage {
  (page: number): void;
}

interface SearchNotes {
  (searchText: string): void;
}

interface FindNote {
  (id: number): Note | undefined;
}

interface Info {
  currentPage: number;
  maxPage: number;
}
