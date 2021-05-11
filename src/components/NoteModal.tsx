import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useNotes } from '../contexts/NotesContext';

const { useState, useRef } = React;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const NoteModal: React.FC<Props> = ({ open, setOpen, id }) => {
  const { notesState, notesDispatch } = useNotes();
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    const notes = notesState.filter((note) => note.id === id);
    if (notes.length === 0) {
      notesDispatch({ type: 'add-note', payload: { id, content: input } });
    } else {
      notesDispatch({ type: 'mofify-note', payload: { id, content: input } });
    }
    setOpen(false);
  };

  const handleOnChange = () => {
    if (inputRef.current) {
      setInput(inputRef.current.value);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Votre note</DialogTitle>
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
