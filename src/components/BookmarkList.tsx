import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import blue from '@material-ui/core/colors/blue';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { useBookmarks } from '../contexts/BookmarksContext';
import { IBookmark } from '../reducers/BookmarksReducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'rgb(121 121 121 / 35%) 1px 10px 20px',
      borderRadius: '5px',
      overflow: 'auto',
    },
    title: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontWeight: 700,
      textAlign: 'center',
      padding: theme.spacing(1),
    },
    iconContainer: {
      '&:hover $icon': {
        color: 'red',
      },
    },
    icon: {
      color: blue[200],
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const BookmarkList: React.FC = () => {
  const classes = useStyles();
  const { bookmarksState, bookmarksDispatch } = useBookmarks();

  const handleOnClick = (id: string) => {
    bookmarksDispatch({ type: 'remove-bookmark', payload: { id } });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Bookmarks
      </Typography>
      <List component="nav" aria-label="bookmarks list">
        {bookmarksState.length === 0 ? (
          <ListItem>
            <ListItemText primary="Survolez un paragraphe pour ajouter un bookmark" />
          </ListItem>
        ) : (
          bookmarksState.map((bookmark: IBookmark) => {
            return (
              <ListItemLink href={`#${bookmark.id}`}>
                <ListItemText primary={bookmark.id} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleOnClick(bookmark.id)}
                    className={classes.iconContainer}
                  >
                    <DeleteIcon className={classes.icon} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItemLink>
            );
          })
        )}
      </List>
    </div>
  );
};

export default BookmarkList;
