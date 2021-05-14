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
      tableLayout: 'fixed',
      width: '100%',
    },
    timeline__split: {
      display: 'table-cell',
      width: '3px',
    },
    timeline__steps: {
      display: 'table',
      tableLayout: 'fixed',
      width: '100%',
      padding: '8px 0',
      position: 'relative',
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
    timeline__icon: {
      lineHeight: 'inherit',
    },
    timeline__iconContainer: {
      width: '36px',
      display: 'table-cell',
      backgroundColor: 'rgba(130,130,130,.6)',
      borderRadius: '50%',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'middle',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  }),
);

const Timeline: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={9} container direction="row" alignItems="center">
        <div className={classes.timeline}>
          <span className={classes.timeline__iconContainer}>
            <i className={`fas fa-home fa-lg ${classes.timeline__icon}`} />
          </span>
          <span className={classes.timeline__split} />
          <div className={classes.timeline__steps}>
            <span className={classes.timeline__step} />
            <span className={classes.timeline__step} />
            <span className={classes.timeline__step} />
            <span className={classes.timeline__step} />
            <span className={classes.timeline__step} />
            <span className={classes.timeline__step} />
          </div>
          <span className={classes.timeline__split} />
          <span className={classes.timeline__iconContainer}>
            <i className={`fas fa-trophy fa-lg ${classes.timeline__icon}`} />
          </span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Timeline;
