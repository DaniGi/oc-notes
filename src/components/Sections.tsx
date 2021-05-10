import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

interface ISection {
  title: string;
  content: string;
}

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const sections: ISection[] = [
  {
    title: 'title 1',
    content,
  },
  {
    title: 'title 2',
    content,
  },
  {
    title: 'title 3',
    content,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
    },
  }),
);

const Sections: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      {sections.map((section) => {
        return (
          <div className={classes.root}>
            <Typography variant="h3">{section.title}</Typography>
            <Typography>{section.content}</Typography>
          </div>
        );
      })}
    </>
  );
};

export default Sections;
