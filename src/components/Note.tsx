import * as React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import NoteModal from './NoteModal';

const useStyles = makeStyles(() =>
  createStyles({
    note: {
      color: orange[200],
      padding: 0,
      position: 'absolute',
      top: 30,
      left: -27,
      '&:hover': {
        backgroundColor: 'transparent',
        color: orange[700],
      },
    },
  }),
);

interface Props {
  showIcon: boolean;
  id: string;
}

const Note: React.FC<Props> = ({ showIcon, id }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleIconClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Tooltip title="Écrire une note">
        <IconButton
          aria-label="write note"
          className={classes.note}
          onClick={handleIconClick}
          style={{ display: `${showIcon ? 'block' : 'none'}` }}
        >
          <CommentIcon />
        </IconButton>
      </Tooltip>
      <NoteModal open={open} setOpen={setOpen} id={id} />
    </div>
  );
};

export default Note;
