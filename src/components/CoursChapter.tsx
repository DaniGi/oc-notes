import * as React from 'react';
import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import Sections from './Sections';
import BookmarkList from './BookmarkList';

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
          <Sections />
        </Grid>
        <Grid item xs={12} sm={3}>
          <BookmarkList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoursChapter;
