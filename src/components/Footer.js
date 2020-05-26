import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { pages, title } from '../../static/pages.json'
import { Link } from 'gatsby'
import Logo from "../../public/assets/logo.svg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import FooterSVG from "../../public/assets/footerWave.svg";


const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={classes.white}>
      {'Copyright © '}
      {title}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    // padding: theme.spacing(3),
  },
  columnL: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  columnR: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-start',
    },
  },
  icon: {
    margin: theme.spacing(1),
    height: '2em',
    width: '2em',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  links: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  white: {
    color: theme.palette.common.white,

  },
  waveDiv: {
    position: "relative",
    // width: '100vw',
    overflow: 'hidden',
    marginBottom: -10,
    pointerEvents: 'none',

  },
  wave: {
    right: 0,
    left: 0,
    width: '100%',
    overflow: 'hidden',
    color: theme.palette ? theme.palette.primary.main : "white",
    fill: 'currentcolor',
    pointerEvents: 'none',
  }
}));

const Footer = ({ langKey }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.waveDiv}>
        <FooterSVG className={classes.wave} />
        {/* <svg fillRule="evenodd"
          clipRule="evenodd" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 240"
          className={classes.wave}
        >
          <title>wave-bottom</title>
          <g>
            <path d="M1920,157.624l0,82.231l-1920,0l0,-106.045c54.693,-9.327 89,45.297 242,56.045c153,10.748 265.5,-30.5 411,-30.5c145.5,0 603,131.5 1267,-1.731Z">

            </path>
          </g>
        </svg> */}
      </div>

      <footer className={classes.root} >
        <CssBaseline />

        <Container maxWidth="md" >

          <Grid container spacing={4} justify="space-evenly">

            <Grid item xs={12} sm={7} className={classes.columnL} >
              {/* <Logo fill="white" height={100} /> */}
              <div>
                <LinkedInIcon className={classes.icon} />
                <GitHubIcon className={classes.icon} />
                <FacebookIcon className={classes.icon} />
              </div>

            </Grid>
            <Grid item xs={6} sm={5} className={classes.columnR}>
              {pages.map((page) => (
                <Link key={page.to} style={{ textDecoration: 'none' }} to={page.to}>
                  <Typography variant="h6" className={classes.links} gutterBottom>
                    {page.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
            {/* <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Link style={{ textDecoration: 'none' }} to={`/${langKey}/cookies`}>
                <FormattedMessage id="cookies">
                  {txt =>
                    <Typography variant="h6" className={classes.links} gutterBottom>
                      {txt}
                    </Typography>}
                </FormattedMessage>
              </Link>
            </Grid> */}

            <Grid item xs={12} style={{ textAlign: 'center' }} >
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </footer>
    </React.Fragment>
  );
}
export default Footer
