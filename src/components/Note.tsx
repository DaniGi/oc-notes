import * as React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import NoteModal from './NoteModal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    note: {
      color: theme.palette.secondary.light,
      padding: 0,
      position: 'absolute',
      top: 30,
      left: -27,
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.secondary.main,
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
