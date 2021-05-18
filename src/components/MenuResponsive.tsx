import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    item: {
      marginRight: theme.spacing(2),
    },
  }),
);

const MenuResponsive: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        onClick={handleClick}
        color="inherit"
        aria-label="menu"
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant="h6" className={classes.item}>
            Formations
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="h6" className={classes.item}>
            Alternance
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="h6" className={classes.item}>
            Financements
          </Typography>
        </MenuItem>
        <Divider orientation="horizontal" />
        <MenuItem onClick={handleClose}>
          <Typography variant="h6">Pour les entreprises</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MenuResponsive;
