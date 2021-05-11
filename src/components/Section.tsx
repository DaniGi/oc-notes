import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Note from './Note';
import Bookmark from './Bookmark';

export interface ISection {
  title: string;
  content: string;
  id: string;
}

type Props = ISection;

const { useState, useRef } = React;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      position: 'relative',
    },
  }),
);

const Section: React.FC<Props> = ({ title, id, content }) => {
  const classes = useStyles();
  const [showIcon, setShowIcon] = useState(false);
  const timeoutRef = useRef<number | null>(null);

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
      <Bookmark showIcon={showIcon} id={id} />
      <Note showIcon={showIcon} />
      <Typography variant="h3">{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

export default Section;
