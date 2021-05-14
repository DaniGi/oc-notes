import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
    },
    timeline: {
      display: 'table',
      width: '100%',
      height: '100%',
    },
    timeline__step: {
      display: 'table-cell',
      height: '18px',
      fontSize: '12px',
      background: '#ececec',
      cursor: 'pointer',
      borderBottom: '3px solid rgba(0,0,0,.25)',
      '&::after': {
        content: '""',
        borderLeft: '1px solid rgba(0,0,0,.08)',
        height: '8px',
        top: '8px',
      },
    },
  }),
);

const Timeline: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={9}>
        <div className={classes.timeline}>
          <div className={classes.timeline__step} />
          <div className={classes.timeline__step} />
          <div className={classes.timeline__step} />
          <div className={classes.timeline__step} />
          <div className={classes.timeline__step} />
          <div className={classes.timeline__step} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Timeline;
