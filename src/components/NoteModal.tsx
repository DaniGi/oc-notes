import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grow from '@material-ui/core/Grow';
import { TransitionProps } from '@material-ui/core/transitions';
import { useNotes } from '../contexts/NotesContext';

const { useState, useRef, useEffect } = React;

const Transition = React.forwardRef(
  (
    // eslint-disable-next-line react/require-default-props
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) => {
    return <Grow ref={ref} {...props} style={{ transformOrigin: '0 0 0' }} />;
  },
);

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const NoteModal: React.FC<Props> = ({ open, setOpen, id }) => {
  const { notesState, notesDispatch } = useNotes();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef(false);

  useEffect(() => {
    const items = notesState.filter((note) => note.id === id);
    if (items.length === 0) {
      noteRef.current = false;
    } else {
      noteRef.current = true;
    }
  });

  const handleClose = () => {
    setOpen(false);
    if (input.length === 0) return;
    const notes = notesState.filter((note) => note.id === id);
    if (notes.length === 0) {
      notesDispatch({ type: 'add-note', payload: { id, content: input } });
    } else {
      notesDispatch({ type: 'mofify-note', payload: { id, content: input } });
    }
  };

  const handleOnChange = () => {
    if (inputRef.current) {
      setInput(inputRef.current.value);
    }
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {noteRef.current ? 'Modifier note' : 'Nouvelle note'}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Note"
          inputRef={inputRef}
          fullWidth
          multiline
          value={input}
          onChange={handleOnChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default NoteModal;
