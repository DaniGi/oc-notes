import * as React from 'react';
import { Grid, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      '& *': {
        color: theme.palette.secondary.main,
      },
    },
    separator: {
      margin: 0,
    },
    breadcrumbs: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    breadcrumbs__item: {
      fontWeight: 700,
      fontSize: '0.875rem',
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: 0,
      '& > *': {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    label: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    info__item: {
      display: 'inline-block',
    },
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={11} className={classes.breadcrumbs}>
        <Breadcrumbs
          classes={{ separator: classes.separator }}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Typography color="inherit" className={classes.breadcrumbs__item}>
            Accueil
          </Typography>
          <Typography color="inherit" className={classes.breadcrumbs__item}>
            Cours
          </Typography>
          <Typography color="textPrimary" className={classes.breadcrumbs__item}>
            Élaborez votre stratégie de recherche d&apos;emploi
          </Typography>
        </Breadcrumbs>
      </Grid>
      <Grid item xs={12} sm={9} className={classes.title}>
        <Typography variant="h1">Élaborez votre stratégie de recherche d&apos;emploi</Typography>
      </Grid>
      <Grid item container xs={12} sm={9} alignItems="center" justify="space-between">
        <Grid item>
          <div>
            <ul className={classes.info}>
              <li style={{ marginRight: '1rem' }}>
                <img
                  className={classes.info__item}
                  src="https://www.openclassrooms.com/images/icons/schedule.svg?0c3d209d"
                  width="16"
                  title="Ce cours demande en moyenne 8 heures de travail pour être réussi."
                  alt=""
                />
                <span className={classes.label}>100+ heures</span>
              </li>
              <li>
                <i className="fas fa-signal" />
                <span className={classes.label}>Pas Facile</span>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item>
          <div>
            <span className={classes.label}>Licence</span>
            <i className="far fa-closed-captioning" />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
