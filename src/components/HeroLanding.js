import React from 'react'
import { Grid, Typography, fade, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'gatsby'
// import SVG from "../../public/assets/landing.svg";
// import HeroSVG from "../../public/assets/heroWave.svg";
import useSiteMetadata from "./SiteMetadata";


const useStyles = makeStyles((theme) => ({

    gradient: {
        // background: `linear-gradient(180deg ,${theme.palette.primary.main} 50%, ${fade(theme.palette.primary.main, 0.7)}100%)`,
        backgroundSize: "cover",
        overflow: 'hidden',
        // minHeight: '100vh',
        backgroundPosition: `center`,

        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        height: '33vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '25px',
        color: theme.palette ? theme.palette.common.white : "white"
    },
    content: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(7),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        color: theme.palette ? theme.palette.common.white : "white",
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        },
    },
    button: {

        marginTop: 20,
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.secondary.main,
        }
    },
    buttonClasses: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.secondary.main,
        },
        width: 200,
        height: 40,
        fontSize: 15,
        fontWeight: 400,
        [theme.breakpoints.up('sm')]: {
            width: 500,
            height: 60,
            fontSize: 30,
        },
    },
    waveDiv: {
        position: "absolute",
        left: 0,
        width: '100%',
    },
    wave: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: theme.palette ? theme.palette.common.white : "white",
        fill: 'currentcolor',
        pointerEvents: 'none',

    },
    img: {
        alignSelf: 'flex-end',
        height: '100%',
    }
}))

const RenderGradient = ({ title, subheading, location, image }) => {
    const theme = useTheme()
    const classes = useStyles();
    return (
        <div
            className={classes.gradient}
            style={{
                background: `url(${
                    !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
            }}
        // style={{
        //     background: `radial-gradient(at 50% 100%, ${fade(theme.palette.primary.main, 0.7)},${theme.palette.primary.main}),
        // url(${
        //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        //         })`,
        // }}
        >
            <Grid container className={classes.container} >
                <Grid item md={9} lg={7} className={classes.container} >
                    <RenderHeroContent location={location} title={title} subheading={subheading} classes={classes} />
                </Grid>
                <Hidden mdDown>
                    <Grid item md={4} className={classes.img}  >
                        {/* <SVG /> */}
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}
RenderGradient.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
}


const RenderHeroContent = ({ title, subheading, location }) => {
    const classes = useStyles();
    // const url = location.pathname;
    // const { languages } = useSiteMetadata();
    // const { langs, defaultLangKey } = languages;
    return (

        <Grid container className={classes.content}>
            {/*<Typography component="h1" variant="h1" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" paragraph>
                {subheading}
            </Typography>

             <Button component={Link} to={`/${langKey}/courses`} variant="outlined" className={classes.buttonClasses} disableElevation color="secondary">
                <FormattedMessage id="discover" />
            </Button> */}
        </Grid>
    )
}
RenderHeroContent.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
}

const HeroLanding = ({ title, subheading, location, image }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <RenderGradient title={title} subheading={subheading} location={location} image={image} />
            <div className={classes.waveDiv}>
                {/* <HeroSVG className={classes.wave} /> */}
            </div>
        </React.Fragment>)
}
HeroLanding.propTypes = {
    title: PropTypes.string,
    subheading: PropTypes.string,
}
export default HeroLanding 
