export interface IBookmark {
  title: string;
  id: string;
}

interface IAction {
  type: 'add-bookmark' | 'remove-bookmark';
  payload?: any;
}

// type TDispatchFunc = (state: IBookmark[], payload?: any) => IBookmark[];

export const BookmarksReducer = (state: IBookmark[], action: IAction) => {
  const { type } = action;
  switch (type) {
    case 'add-bookmark':
      return state;
    case 'remove-bookmark':
      return state;
    default:
      return state;
  }
};
