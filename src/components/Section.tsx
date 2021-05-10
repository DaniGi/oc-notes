import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import blue from '@material-ui/core/colors/blue';

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
      padding: 0,
      position: 'absolute',
      top: 3,
      left: -27,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    bookmark__icon: {
      color: blue[200],
    },
    bookmark__icon__hover: {
      color: blue[900],
    },
  }),
);

const Section: React.FC<Props> = ({ title, content }) => {
  const classes = useStyles();
  const [isActiveIcon, setIsactiveIcon] = useState(false);

  return (
    <div className={classes.root}>
      <Tooltip title={`${isActiveIcon ? 'Supprimer bookmark' : 'Ajouter bookmark'}`}>
        <IconButton
          aria-label="add bookmark"
          className={classes.bookmark}
          onClick={() => setIsactiveIcon((prev) => !prev)}
        >
          {isActiveIcon ? (
            <BookmarkIcon className={classes.bookmark__icon__hover} />
          ) : (
            <BookmarkBorderIcon className={classes.bookmark__icon} />
          )}
        </IconButton>
      </Tooltip>
      <Typography variant="h3">{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

export default Section;
