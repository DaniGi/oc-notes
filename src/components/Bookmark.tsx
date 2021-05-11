import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import blue from '@material-ui/core/colors/blue';
import { createStyles, makeStyles } from '@material-ui/core';
import { useBookmarks } from '../contexts/BookmarksContext';

const { useState, useEffect } = React;

interface Props {
  showIcon: boolean;
  id: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    bookmark: {
      padding: 0,
      position: 'absolute',
      top: 3,
      left: -27,
      '&:hover': {
        backgroundColor: 'transparent',
        color: blue[900],
      },
    },
    bookmark__icon: {
      color: blue[200],
      '&:hover': {
        color: blue[900],
      },
    },
    bookmark__icon__hover: {
      color: blue[900],
    },
  }),
);

const Bookmark: React.FC<Props> = ({ showIcon, id }) => {
  const classes = useStyles();
  const { bookmarksState, bookmarksDispatch } = useBookmarks();
  const [isInList, SetisInList] = useState(false);

  useEffect(() => {
    const items = bookmarksState.filter((bookmark) => bookmark.id === id);
    if (items.length === 0) {
      SetisInList(false);
    } else {
      SetisInList(true);
    }
  }, [bookmarksState, id]);

  const handleIconClick = () => {
    if (isInList) {
      bookmarksDispatch({ type: 'remove-bookmark', payload: { id } });
    } else {
      bookmarksDispatch({ type: 'add-bookmark', payload: { id } });
    }
  };

  return (
    <Tooltip title={`${isInList ? 'Supprimer bookmark' : 'Ajouter bookmark'}`}>
      <IconButton
        aria-label="add bookmark"
        className={classes.bookmark}
        onClick={handleIconClick}
        style={{ display: `${showIcon ? 'block' : 'none'}` }}
      >
        {isInList ? (
          <BookmarkIcon className={classes.bookmark__icon__hover} />
        ) : (
          <BookmarkBorderIcon className={classes.bookmark__icon} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Bookmark;
