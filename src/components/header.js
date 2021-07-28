import React,{ useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Button} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import { SwipeableDrawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import {Link} from 'react-router-dom';
//import {Drawer} from '@material-ui/core';
//import PropTypes from 'prop-types';
//import Toolbar from '@material-ui/core/Toolbar';
//import { Typography } from '@material-ui/core';
//import { borderRadius } from '@material-ui/system';
//import { option } from 'yargs';
//import useMediaQuery  from '@material-ui/core/useMediaQuery';
//import {useTheme} from "@material-ui/core/styles";



function ElevationScroll(props) {
    const { children} = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => {
    console.log(theme);
    return({
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
      },
  
      logo: {
        height: "7em"
      },
  
      logoContainer: {
        padding:0
      },
  
      tabContainer: {
        marginLeft: "auto"
      },
  
      tab: {
        ...theme.typography.tab,
        minWidth:10,
        marginLeft:"25px"
      },
      
      button:{
        ...theme.typography.signUp,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight:"25px",
        height:"45px",
        color:"#FFFF00"
      },
  
      menu:{
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover":{
          opacity: 1
        }
      },
  
      menuItem:{
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
          opacity: 1
        }
      },
      
      drawerIcon:{
       height: "50px",
       width: "50px"
      },
  
      drawerIconContainer:{
        marginLeft: "auto",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
  
      drawer:{
        backgroundColor: theme.palette.common.green
      },
  
      drawerItem:{
        ...theme.typography.tab,
        color:"white",
        opacity: 0.7
      },
  
      drawerItemSelected:{
        opacity:1
      }
        
    })
  });
  
  /*ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };*/
  
export default function Header(props){
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/
  .test(navigator.userAgent);
  const[value, setValue] = useState(0);
  const[anchorEl, setAnchorEl] = useState(null);
  const[openMenu, setOpenMenu] = useState(false);
  const[openDrawer, setOpenDrawer] = useState(false);
  //const[selectedIndex, setSelectedIndex] = useState(0);
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.down("md"));
 
  

  /*const handleChange = ({e,newValue } ) => {
   setValue(newValue)
  }*/

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }


  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } 
    else if (window.location.pathName === "/services" && value !== 1) {
      setValue(1)
    }
    else if (window.location.pathName === "/aboutus" && value !== 2) {
      setValue(2)
    }
    else if (window.location.pathName === "/contact" && value !== 3) {
      setValue(3)
    }
    else if (window.location.pathName === "/signup" && value !== 4) {
      setValue(4)
    }
  },[value]);

  const drawer = () => {
    return (
      <React.Fragement>
      <SwipeableDrawer 
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS} 
      open={openDrawer}
      onClose={()=> setOpenDrawer(false)}
      onOpen={()=> setOpenDrawer(true)} 
      classes={{paper:classes.drawer}}>

     <List disablePadding>
       <ListItem 
       onClick={() => {setOpenDrawer(false); setValue(0)}}
       divider
        button 
        component={Link} 
        to="/"
        selected={value === 0}
        >
         <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected]:classes.drawerItem}
         disableTypography>
           Home
         </ListItemText>
       </ListItem>

       <ListItem 
       onClick={() => {setOpenDrawer(false); setValue(1)}}
       divider 
       button 
       component={Link} 
       to="/services"
       selected={value === 1}
       >
         <ListItemText className={value === 0 ?[classes.drawerItemSelected]:classes.drawerItem} disableTypography>
          Services
         </ListItemText>
       </ListItem>

       <ListItem 
       onClick={() => {setOpenDrawer(false);setValue(2)}} 
       divider 
       button 
       component={Link} 
       to="/contact"
       selected={value === 2}
       >
         <ListItemText disableTypography>
           Contact Us
         </ListItemText>
       </ListItem>

       <ListItem 
       onClick={() => {setOpenDrawer(false); setValue(3)} }
       divider 
       button 
       component={Link} 
       to="/about"
       selected={value === 3}
       >
       <ListItemText disableTypography>
           Contact Us
         </ListItemText>
       </ListItem>
     </List>

     Example Drawer
     </SwipeableDrawer>
     <IconButton className={classes.drawerIconContainer} onClick={()=> setOpenDrawer(!openDrawer)}
     disableRipple>
     <MenuIcon className={classes.drawerIcon}>
      </MenuIcon>
     </IconButton>
    </React.Fragement>
    
  )
  } ;

   return(
      <React.Fragement>
      <ElevationScroll>
      <AppBar position="fixed">        
            <Tabs 
            value={value} 
            //onChange={}
            className = {classes.tabContainer} >
            <Tab 
             className={classes.tab}
             component={Link} 
             to="/home"
             label="Home" 
            />
              </Tabs>
              <Tab 
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aris-haspopup={anchorEl ? "true" :undefined}
              className={classes.tab}  
              component={Link}
              onMouseOver={event => handleClick(event)}
              to="/services" 
              lassbel="Services" 
              />

              <Tab 
                className={classes.tab}  
                component={Link} 
                to="/aboutus" 
                label="About Us" 
              />

              <Tab 
               className={classes.tab}  
               component={Link} 
               to="/contactus" 
               label="Contact Us" 
              />
         
              <Button varient="contained" color="secondary">
                Sign Up
              </Button>

              <Menu 
              id="simple-menu" 
              anchorEl={anchorEl} 
              open={openMenu}
              onClose={handleClose}
              classes={{ paper:classes.menu}}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
              >
            
               <MenuItem 
                onClick={() => {handleClose(); setValue(1)}}
                component={Link}
                to="/foodmenu">
                  Food Menu
                </MenuItem>
                <MenuItem 
                onClick={() => {handleClose(); setValue(1)}}
                component={Link}
                to="/ourspecialdish"
                >
                  ourspecialdish
                </MenuItem>
                <MenuItem 
                onClick={() => {handleClose(); setValue(1)}}
                component={Link}
                to="/booktable"
                >
                  Book Table
                </MenuItem>
              </Menu>
          </AppBar>
          </ElevationScroll>
          </React.Fragement> 
    )
  }


  