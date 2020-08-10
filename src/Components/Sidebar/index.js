import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// My imports
import {
  FaUserPlus,
  FaUsers,
  FaCubes,
  FaSignOutAlt,
  FaClock,
  FaTrademark,
  FaInbox,
  FaCodeBranch,
} from "react-icons/fa";
import IconMenuClose from "../../assets/icons/icon-close.svg";
import IconMenuOpen from "../../assets/icons/icon-open.svg";
import "./style.css";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const iconMenu = [
    <FaUsers />,
    <FaInbox />,
    <FaCubes />,
    <FaTrademark />,
    <FaCodeBranch />,
    <FaClock />,
    <FaUserPlus />,
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        id='barra-lateral'
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <div className={classes.toolbar}>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <img src={IconMenuClose} alt='close menu' />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <img src={IconMenuOpen} alt='open menu' />
            </IconButton>
          )}
        </div>
        {/*** logo unifrio ***/}
        {open && (
          <img
            className='logo'
            src='https://fontmeme.com/temporary/277571e888cab724c81e3936d7850810.png'
            alt='logo'
          />
        )}
        <List>
          {[
            "Clientes",
            "Produtos",
            "Estoque",
            "Marcas",
            "Categorias",
            "LOG",
            "Usuários",
          ].map((text, index) => (
            <ListItem button key={index}>
              {/* icons lits */}
              <ListItemIcon>{text && iconMenu[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <div id='sing-out' className='MuiTypography-body1'>
          {open ? (
            <a href='#teste'>
              <FaSignOutAlt /> <span>Sair</span>
            </a>
          ) : (
            <span id='sing-out-closed'>
              <a href='#teste'>
                <FaSignOutAlt />
              </a>
            </span>
          )}
        </div>
      </Drawer>
    </div>
  );
}
