import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import { domain } from '../../static/pages.json'
import {
    FacebookShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: fade(theme.palette.common.white, 0.1),
        margin: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const SharePopover = ({ url, title }) => {
    const shareUrl = domain + url
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <FacebookShareButton
                url={shareUrl}
                quote={title}
                className={classes.container}
            >
                {/* <FacebookShareCount url={shareUrl} >
                    {count =>
                        <Badge showZero badgeContent={count} color="primary">*/}
                <FacebookIcon size={32} round />
                {/* </Badge>}
                </FacebookShareCount>  */}
            </FacebookShareButton>
            <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className={classes.container}            >
                <FacebookMessengerIcon size={32} round />
            </FacebookMessengerShareButton>
            <TwitterShareButton
                url={shareUrl}
                title={title}
                className={classes.container}            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className={classes.container}            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <PinterestShareButton
                url={String(window.location)}
                // media={`${String(window.location)}/${exampleImage}`}
                className={classes.container}            >
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            <EmailShareButton
                url={shareUrl}
                subject={title}
                body="Check out this article from Flightoclock :"
                className={classes.container}            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    );
}

export default SharePopover
