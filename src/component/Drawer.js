import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import PaletteIcon from "@material-ui/icons/Palette";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "auto",
    backgroundColor: "#050505"
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      backgroundColor: "black"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  swipeableDrawer: {
    backgroundColor: "black"
  },
  grid: {},
  link: {
    textDecoration: "none",
    color: "#ffffdd"
  },
  icons: {
    color: "#ffffdd",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "white"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px",
    color: "#ebebeb"
  },
  divider: {
    backgroundColor: "#334ad8"
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const links = (
    <Fragment>
      <Typography className={classes.title} variant='body1'>
        Portfolio Info
      </Typography>
      <Divider className={classes.divider} />
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>{" "}
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link to='/project' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link to='/about' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link to='/certificates' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary='Certificates' />
          </ListItem>
        </Link>
      </List>
      <Divider className={classes.divider} />
      <List>
        <Link to='/contact' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary='Resume/CV' />
          </ListItem>
        </Link>
      </List>
    </Fragment>
  );

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {links}
    </div>
  );

  const anchor = "top";

  return (
    <AppBar position='static' className={classes.display}>
      <Toolbar>
        <IconButton
          className={classes.hamburger}
          onClick={toggleDrawer(anchor, true)}>
          <DehazeIcon />
        </IconButton>
        <Typography className={classes.grid} variant='h6'>
          Portfolio App
        </Typography>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}>
          {list(anchor)}
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}
