import * as React from 'react';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import Section from './Section';
import BookmarkList from './BookmarkList';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const sections = [
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
  {
    title: 'title 4',
    content,
  },
  {
    title: 'title 5',
    content,
  },
  {
    title: 'title 6',
    content,
  },
  {
    title: 'title 7',
    content,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
  }),
);

const CoursChapter: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item container xs={12} sm={9}>
        <Grid item xs={12} sm={9} style={{ paddingRight: '30px' }}>
          <Typography variant="h2">Maîtrisez votre e-réputation</Typography>
          {sections.map((section, index) => (
            <Section title={section.title} id={`bookmark-${index}`} content={section.content} />
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <BookmarkList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoursChapter;
