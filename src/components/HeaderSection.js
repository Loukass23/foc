import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'


const useStyles = makeStyles((theme) => ({


    headerContent: {
        // padding: theme.spacing(2),
        marginTop: theme.spacing(10),
        marginBottom: 0
    },
    header: {
        paddingBottom: 0,
        marginBottom: 0,
        borderTop: '3px double #123',
        content: '',
        display: 'table-cell',
        width: '50%'
    }

}));


export default function HeaderSection({ header, subheader }) {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.headerContent}>

            <Typography component="h4" variant="h4" align="center" color="inherit" className="line-header">
                {header}
            </Typography>
            {
                subheader && <Typography variant="h5" align="center" color="inherit" component="p">
                    {subheader}
                </Typography>
            }
        </Container>

    );
}
HeaderSection.propTypes = {
    header: PropTypes.string,
    subheader: PropTypes.string,
}