export interface IBookmark {
  title: string;
  id: string;
}

interface IAction {
  type: 'add-bookmark' | 'remove-bookmark';
  payload?: any;
}

type TDispatchFunc = (state: IBookmark[], payload?: any) => IBookmark[];

const addBookmark: TDispatchFunc = (state, id) => {
  return [...state, { id, title: id }];
};

const removeBookmark: TDispatchFunc = (state, id) => {
  const newState = state.filter((bookmark) => {
    return bookmark.id !== id;
  });
  return newState;
};

export const BookmarksReducer = (state: IBookmark[], action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'add-bookmark':
      return addBookmark(state, payload.id);
    case 'remove-bookmark':
      return removeBookmark(state, payload.id);
    default:
      return state;
  }
};
