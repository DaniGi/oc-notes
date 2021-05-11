export interface INote {
  id: string;
  content: string;
}

interface IAction {
  type: 'modify-note' | 'delete-note' | 'add-note';
  payload?: any;
}

type TDispatchFunc = (state: INote[], payload?: any) => INote[];

const addNote: TDispatchFunc = (state, { id, content }) => {
  return [...state, { id, content }];
};

const modifyNote: TDispatchFunc = (state, { id, content }) => {
  const newState = state.map((note) => {
    if (note.id === id) {
      return { ...note, content };
    }
    return note;
  });
  return newState;
};

export const NotesReducer = (state: INote[], action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'add-note':
      return addNote(state, payload);
    case 'modify-note':
      return modifyNote(state, payload);
    case 'delete-note':
      return state;
    default:
      return state;
  }
};
