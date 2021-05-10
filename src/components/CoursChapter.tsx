import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import * as React from 'react';

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
      <Grid item xs={12} sm={10}>
        <Typography variant="h2">Maîtrisez votre e-réputation</Typography>
      </Grid>
    </Grid>
  );
};

export default CoursChapter;
