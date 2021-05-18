import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Section from './Section';
import BookmarkList from './BookmarkList';
import BookmarkDrawer from './BookmarkDrawer';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const sections = [
  {
    title: 'Modifiez votre code sur la branch main',
    content,
  },
  {
    title: '1 heures aprés: 300 lignes de code modifiées, 0 commits',
    content,
  },
  {
    title: '1 heure et 1 minute aprés: plus rien ne fonctionne',
    content,
  },
  {
    title: 'Ctrl+z et console.log()',
    content,
  },
  {
    title: '6 heures aprés: qui suis-je?',
    content,
  },
  {
    title: "6 heures et 1 minute aprés: j'ai mal tapé le nom d'une variable",
    content,
  },
  {
    title: 'Tout fonctionne: je suis le meilleur dev du monde',
    content,
  },
  {
    title: 'Mark, Elon, Bill, Jeff et moi',
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
  const theme = useTheme();
  const smBreakpoint = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item container xs={11} sm={9}>
        <Grid item xs={11} md={9} style={{ paddingRight: '30px' }}>
          <Typography variant="h2">Gâchez la moitie de votre journée</Typography>
          {sections.map((section, index) => (
            <Section title={section.title} id={`bookmark-${index}`} content={section.content} />
          ))}
        </Grid>
        <Grid item xs={1} md={3}>
          {smBreakpoint ? <BookmarkList /> : <BookmarkDrawer />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoursChapter;
