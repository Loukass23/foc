import React from 'react';
import { useScrollTrigger, Zoom } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const mainWindow = typeof window !== 'undefined' && window;


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            zIndex: 9999999
        },
    }),
);
const ScrollTop = (props) => {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    const handleClick = () => {
        mainWindow.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };

    return (
        <Zoom in={trigger}
        >
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}
export default ScrollTop