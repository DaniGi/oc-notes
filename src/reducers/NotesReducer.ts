export interface INote {
  id: string;
  content: string;
}

interface IAction {
  type: 'modify-note' | 'delete-note' | 'add-note';
  payload?: any;
}

export const NotesReducer = (state: INote[], action: IAction) => {
  const { type } = action;
  switch (type) {
    case 'add-note':
      return state;
    case 'modify-note':
      return state;
    case 'delete-note':
      return state;
    default:
      return state;
  }
};
