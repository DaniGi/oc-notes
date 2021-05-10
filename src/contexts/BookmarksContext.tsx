import * as React from 'react';
import { BookmarksReducer, IBookmark } from '../reducers/BookmarksReducer';

const { createContext, useContext, useReducer } = React;

interface IBookmarksContext {
  bookmarksState: IBookmark[] | [];
  bookmarksDispatch: React.Dispatch<any> | (() => {});
}

const BookmarksContext = createContext<IBookmarksContext>({
  bookmarksState: [],
  bookmarksDispatch: () => {},
});

export const useBookmarks = () => {
  return useContext(BookmarksContext);
};

export const BookmarksProvider: React.FC = ({ children }) => {
  const [bookmarksState, bookmarksDispatch] = useReducer(BookmarksReducer, []);

  const value = {
    bookmarksState,
    bookmarksDispatch,
  };

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
};
