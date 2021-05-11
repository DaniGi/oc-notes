import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import blue from '@material-ui/core/colors/blue';
import { useBookmarks } from '../contexts/BookmarksContext';

export interface ISection {
  title: string;
  content: string;
  id: string;
}

type Props = ISection;

const { useState, useEffect, useRef } = React;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      position: 'relative',
    },
    bookmark: {
      padding: 0,
      position: 'absolute',
      top: 3,
      left: -27,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    bookmark__icon: {
      color: blue[200],
    },
    bookmark__icon__hover: {
      color: blue[900],
    },
  }),
);

const Section: React.FC<Props> = ({ title, id, content }) => {
  const classes = useStyles();
  const [isInList, SetisInList] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const { bookmarksState, bookmarksDispatch } = useBookmarks();

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

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = (setTimeout(() => {
      setShowIcon(false);
    }, 500) as unknown) as number;
  };

  return (
    <div
      className={classes.root}
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
      <Typography variant="h3">{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

export default Section;
