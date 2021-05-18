import React from 'react';
import { withStyles, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import blue from '@material-ui/core/colors/blue';
import BookmarkList from './BookmarkList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bookmark: {
      color: blue[900],
      border: '2px solid',
      padding: theme.spacing(1),
      position: 'fixed',
    },
  }),
);

const StyledDrawer = withStyles({
  paperAnchorRight: {
    top: '39%',
    width: 250,
    height: 'fit-content',
    borderRadius: '5px',
  },
})(Drawer);

const BookmarkDrawer: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Tooltip title="Afficher liste">
        <IconButton
          className={classes.bookmark}
          aria-label="show bookmark list"
          onClick={() => setIsOpen(true)}
        >
          <BookmarkIcon />
        </IconButton>
      </Tooltip>
      <StyledDrawer
        anchor="right"
        open={isOpen}
        onKeyDown={() => setIsOpen(false)}
        onClick={() => setIsOpen(false)}
      >
        <BookmarkList />
      </StyledDrawer>
    </div>
  );
};

export default BookmarkDrawer;
