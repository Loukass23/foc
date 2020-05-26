import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { domain } from '../../static/pages.json'
import {
    FacebookShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    WeiboIcon,
} from 'react-share';


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: fade(theme.palette.common.white, 0.1),
        margin: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 1
    }
}));

const SharePopover = ({ url, title }) => {
    const shareUrl = domain + url
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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


            {/* <div className="Demo__some-network">
                <TelegramShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>

                <div className="Demo__some-network__share-count">&nbsp;</div>
            </div> */}


            <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className={classes.container}            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>



            <LinkedinShareButton url={shareUrl}
                className={classes.container}            >
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>

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



            <InstapaperShareButton
                url={shareUrl}
                title={title}
                className={classes.container}            >
                <InstapaperIcon size={32} round />
            </InstapaperShareButton>

        </div>
    );
}

export default SharePopover
