import React, { Fragment } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PaletteIcon from "@material-ui/icons/Palette";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import BuildIcon from "@material-ui/icons/Build";
import EmailIcon from "@material-ui/icons/Email";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      backgroundColor: "black"
    }
  },
  list: {
    display: "flex",
    padding: "12px"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  icons: {
    color: "white",
    minWidth: "35px"
  },
  right: {
    display: "flex",
    marginLeft: "auto"
  },
  appicon: {
    color: "white",
    minWidth: "35px",
    marginTop: 2
  }
}));

const Navbar = () => {
  const classes = useStyles();

  const links = (
    <Fragment>
      <List className={classes.list}>
        <ListItemIcon className={classes.appicon}>
          <FingerprintIcon />
        </ListItemIcon>
        <Typography variant='h6'>Portfolio App</Typography>
      </List>
      <List className={classes.right}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to='/project' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PaletteIcon />
            </ListItemIcon>
            <ListItemText primary='Projects' />
          </ListItem>
        </Link>

        <Link to='/about' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </Link>

        <Link to='/certificates' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary='Certificates' />
          </ListItem>
        </Link>

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

  return (
    <AppBar position='static' color='transparent' className={classes.navbar}>
      <Toolbar>{links}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
