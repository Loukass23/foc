import React from 'react'
import { Grid, Typography, fade, Button } from '@material-ui/core';
import { makeStyles, } from '@material-ui/styles';
import PropTypes from 'prop-types'
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'gatsby'
import HeroSVG from "../../public/assets/heroWave.svg";
// import useSiteMetadata from "./SiteMetadata";


const useStyles = makeStyles((theme) => ({

    gradient: {
        background: `linear-gradient(180deg ,${theme.palette.primary.main} 50%, ${fade(theme.palette.primary.main, 0.7)}100%)`,
        backgroundSize: "cover",
        overflow: 'hidden',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
    },
    container: {
        height: '100%',
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
    sectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        // color: theme.palette.common.white,
        // '&:hover': {
        //     backgroundColor: theme.palette.common.white,
        //     color: theme.palette.secondary.main,
        // }
    },
    section: {
        marginTop: -10,
        paddingBottom: theme.spacing(4),
        // backgroundColor: theme.palette.secondary.main,

    },
    waveDiv: {
        position: "relative",

        pointerEvents: 'none',
    },
    waveTop: {
        // right: 0,
        // left: 0,
        // width: '100%',
        // overflow: 'hidden',
        // color: theme.palette ? theme.palette.primary.black : "white",
        // fill: 'currentcolor',
        // pointerEvents: 'none',

    },
    waveBottom: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // color: theme.palette ? theme.palette.common.black : "white",
        // fill: 'currentcolor',
        // pointerEvents: 'none',

    }
}))




const SectionWrapper = ({ children, color, bgColor }) => {
    const classes = useStyles();
    return (
        <div className={classes.sectionContainer}>
            <div className={classes.waveDiv}>
                <HeroSVG fill={bgColor} transform="scale(-1,1)" />
            </div>
            <div className={classes.section} style={{ color: color, backgroundColor: bgColor }}>
                {children}
            </div>
            <div className={classes.waveDiv}>
                <HeroSVG fill={bgColor} transform="scale(1,-1)" />
            </div>
        </div>)
}

export default SectionWrapper 
