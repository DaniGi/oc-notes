import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import BookmarkList from './BookmarkList';

const StyledDrawer = withStyles({
  paperAnchorRight: {
    top: '10%',
    width: 250,
    height: 'fit-content',
    borderRadius: '5px',
  },
})(Drawer);

const BookmarkDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen((prev) => !prev)}>Toggle</Button>
      <StyledDrawer anchor="right" open={isOpen}>
        <BookmarkList />
      </StyledDrawer>
    </div>
  );
};

export default BookmarkDrawer;
