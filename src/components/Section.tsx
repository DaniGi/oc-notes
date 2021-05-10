import * as React from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import blue from '@material-ui/core/colors/blue';

export interface ISection {
  title: string;
  content: string;
}

type Props = ISection;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      position: 'relative',
    },
    bookmark: {
      position: 'absolute',
      top: 3,
      left: -27,
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
  const [isHoverIcon, setIsHoverIcon] = React.useState(false);

  return (
    <div className={classes.root}>
      <div
        className={classes.bookmark}
        onMouseEnter={() => setIsHoverIcon(true)}
        onMouseLeave={() => setIsHoverIcon(false)}
      >
        {isHoverIcon ? (
          <BookmarkIcon className={classes.bookmark__icon__hover} />
        ) : (
          <BookmarkBorderIcon className={classes.bookmark__icon} />
        )}
      </div>
      <Typography variant="h3">{title}</Typography>
      <Typography>{content}</Typography>
    </div>
  );
};

export default Section;
