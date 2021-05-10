import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export interface ISection {
  title: string;
  content: string;
}

type Props = ISection;

const { useState } = React;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      position: 'relative',
    },
    bookmark: {
      display: 'none',
      position: 'absolute',
      top: 3,
      left: -27,
    },
    bookmark__icon: {
      '&hover': {
        backgroundColor: 'blue',
      },
    },
  }),
);

const Sections: React.FC<Props> = ({ title, content }) => {
  const classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsHover(false), 1000);
  };

  return (
    <div className={classes.root} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={classes.bookmark} style={{ display: `${isHover ? 'block' : 'none'}` }}>
        <BookmarkBorderIcon className={classes.bookmark__icon} />
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

export default Sections;
