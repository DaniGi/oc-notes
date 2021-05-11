import * as React from 'react';
import { NotesReducer, INote } from '../reducers/NotesReducer';

const { createContext, useContext, useReducer } = React;

interface INotesContext {
  notesState: INote[] | [];
  notesDispatch: React.Dispatch<any> | (() => {});
}

const NotesContext = createContext<INotesContext>({
  notesState: [],
  notesDispatch: () => {},
});

export const useNotes = () => {
  return useContext(NotesContext);
};

export const NotesProvider: React.FC = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(NotesReducer, []);

  const value = {
    notesState,
    notesDispatch,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
