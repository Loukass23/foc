import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ScrollTop from './ScrollTop';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'gatsby'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { pages, title } from '../../static/pages.json'
import Logo from "../../public/assets/logo.svg";




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  brand: {
    flexGrow: 1,
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',

    // },
  },
  titleShort: {
    flexGrow: 1,
    color: theme.palette.common.black,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      flexGrow: 0,
    },
  },
  link: {
    flexGrow: 1,
    display: 'flex',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
    },
  },
  button: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  subMenu: {
    color: theme.palette.common.black,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  appBar: {
    backgroundColor: 'transparent',
    display: 'flex',
    // position: "fixed",
    borderBottom: "1px solid",

  },
  toolbar: {
    // justifyContent: 'center'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifySelf: 'flex-start',

    },
  },
  underline: {
    height: 60,
    marginBottom: -6,
    borderBottom: "4px solid",
    borderBottomColor: theme.palette.secondary.main
  },
  flexEnd: {
    justifySelf: 'flex-end'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  applyButton: {
    height: "80%",
    alignSelf: 'center',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.main,
    }
  },
}));


const NavBar = (props) => {
  const { url, color } = props;
  const classes = useStyles();
  const theme = useTheme()
  // const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // const [isMenuOpen, setIsMenuOpen] = useState({})
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const isMenuOpen = false;
  // useEffect(() => {
  //   pages.forEach(page => {
  //     if (page.childen) {
  //       setIsMenuOpen({ ...isMenuOpen, [page.to]: false })
  //     }
  //   })
  // }, [])

  // const handleMenuOpen = (event) => {
  //   setIsMenuOpen({ ...isMenuOpen, [event.currentTarget.id]: true })
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false)
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   const toFalse = isMenuOpen
  //   Object.keys(toFalse).forEach(key => toFalse[key] = false)
  //   setIsMenuOpen(toFalse)
  // };

  const handleMobileMenuOpen = (event) => {
    setIsMobileMenuOpen(true)

    setMobileMoreAnchorEl(event.currentTarget);
  };



  const mobileMenuId = 'account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      {pages.map(page =>

        <MenuItem key={page.to} onClick={handleMobileMenuClose} component={Link} to={page.to} >
          {page.name}
        </MenuItem>
      )}


    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar elevation={0}
        className={classes.appBar}
        position="absolute"
        style={{ borderBottomColor: color }}
      >
        <Toolbar className={classes.toolbar}>

          {/* <Logo height={40} fill={theme.palette.common.white} /> */}

          <Typography className={classes.brand} variant="h5">
            <Link to={'/'} style={{ textDecoration: 'none', color }}>
              {title.toUpperCase()}
            </Link>
          </Typography>


          <div className={classes.sectionDesktop}>

            {pages.map(page =>
              <React.Fragment key={page.name}>
                <Button
                  id={page.to}
                  component={Link}
                  to={page.to}
                  className={classes.button}
                  classes={{ label: page.to == url ? classes.underline : '' }}
                  style={{ color }}>
                  {page.name}
                </Button>

              </React.Fragment>
            )}
            {/* <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              test            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >

              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Student Space</MenuItem>
            </Menu> */
            /* <Button component={Link} to={`/${langKey}/application`} variant="outlined" className={classes.applyButton} color="secondary">
              <FormattedMessage id="apply" />
            </Button>
            <SelectLanguage langs={langs} color={theme.palette.common.white} /> */}



          </div>

          <div className={classes.sectionMobile}>
            {/* <Button component={Link} to={`/${langKey}/application`} variant="outlined" className={classes.applyButton} color="secondary">
              Apply
            </Button> */}
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color }}

            >
              <MoreIcon />
            </IconButton>
          </div>


        </Toolbar>
        {/* {renderMenu} */}
        {renderMobileMenu}
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
export default NavBar
