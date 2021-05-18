import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import BookmarkList from './BookmarkList';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const BookmarkDrawer: React.FC = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen((prev) => !prev)}>Toggle</Button>
      <Drawer anchor="right" open={isOpen} className={classes.list}>
        <BookmarkList />
      </Drawer>
    </div>
  );
};

export default BookmarkDrawer;
