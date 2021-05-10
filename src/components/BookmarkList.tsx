import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
      color: theme.palette.secondary.main,
      fontWeight: 700,
      textAlign: 'center',
      padding: theme.spacing(1),
    },
  }),
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const BookmarkList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Bookmarks
      </Typography>
      <List component="nav" aria-label="bookmarks list">
        <ListItem button>
          <ListItemText primary="bookmark 1" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
    </div>
  );
};

export default BookmarkList;