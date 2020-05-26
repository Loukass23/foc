import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import { makeStyles, fade } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import useSiteMetadata from "./SiteMetadata";
import { Link } from 'gatsby';
import SVGLines from "../../public/assets/lines2.svg";
// import SVGLines from "../../public/assets/compoundLines.svg";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },

    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    card: {
        backgroundColor: "#343730",
        // backgroundColor: "rgba(0, 0, 0, 0)",
        boxShadow: `5px 10px ${theme.palette.secondary.main}`,

        position: 'relative',
        height: 300,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        '&:hover': {
            boxShadow: `5px 10px ${fade(theme.palette.secondary.main, 0.5)}`,
            // backgroundColor: fade(theme.palette.secondary.main, 0.5),
            // animation: "grow 1s",
            animationName: '$grow',
            animationFillMode: 'forwards',
            animationDuration: '1s'

        },
    },
    '@keyframes grow': {
        from: {
            transform: 'scale(1)',
            // opacity: 0.1,
        },
        to: {
            transform: 'scale(1.1)',
            // opacity: 0.3,
        },
    },

    cardHeader: {
        // backgroundColor: "none",
        color: theme.palette.common.white

    },
    cardLength: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
    },
    svg: {
        opacity: .5,
        position: 'absolute',
        width: '100%',
        height: '100%',
        // top: 40
    },
    svg2: {
        position: 'absolute',
        width: '100vw',
        height: '100%',
        left: 0
    },
    cardMedia: {
        objectFit: 'cover'
    }


}));

const links = [
    {
        title: 'Journey',
        subheader: 'check out all the places I have been to',
        to: 'journey',
        viewBox: "0 30 33 100"
    },
    {
        title: 'Features',
        subheader: 'My press and media and exposure',
        to: 'features',
        viewBox: "40 30 33 100"
    },
    {
        title: 'Contact',
        subheader: 'Want to work toguether? Want to just say Hi? Email me here',
        to: 'contact',
        viewBox: "70 30 33 100"
    }
];


const LinkCards = () => {
    const classes = useStyles();
    // const url = location.pathname;
    // const { languages } = useSiteMetadata();

    return (
        <div style={{ position: 'relative' }}>
            {/* <div className={classes.svg2}>
                <SVGLines
                    viewBox="0 40 100 100"
                    fill="black"
                // fill="#c9c9c9" 
                />
            </div> */}

            <Grid container spacing={5} >

                {links.map((link) => (
                    <Grid item key={link.title} xs={12} sm={4} >
                        <Link className={classes.link} to={`/${link.to}`}>
                            <Card className={classes.card} style={{ position: 'relative' }} >
                                <div className={classes.svg}>
                                    <SVGLines
                                        viewBox={link.viewBox}
                                        fill="white"
                                    // fill="#c9c9c9" 
                                    />
                                </div>
                                <CardHeader
                                    title={link.title.toUpperCase()}
                                    subheader={link.subheader}
                                    titleTypographyProps={{ fontSize: '2rem', fontWeight: 500, align: 'center', }}
                                    subheaderTypographyProps={{ align: 'center', color: "inherit" }}
                                    // action={course.title === 'Web Development' ? <CodeIcon /> : <MultilineChartIcon />}
                                    className={classes.cardHeader}
                                />
                                {/* <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    title="Contemplative Reptile"
                                    className={classes.cardMedia}
                                /> */}
                                {/* <CardMedia className={classes.cardMedia}>
                                    <SVGLines />
                                </CardMedia> */}

                                {/* <CardContent>
                                    <div className={classes.cardLength}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            {course.length}
                                        </Typography>
                                        {" "}
                                        <Typography variant="h6" color="textSecondary">
                                            months
                    </Typography>
                                    </div>
                                    <ul>
                                        {course.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent> */}
                                {/* <CardActions>
                                <Button fullWidth variant={course.buttonVariant} color="primary">
                                    {course.buttonText}
                                </Button>
                            </CardActions> */}
                            </Card>
                        </Link>
                    </Grid>
                ))
                }
            </Grid>
        </div>
    );
}
export default LinkCards
// export default () => (
//     <StaticQuery
//         query={graphql`
//       query BlogRollQuery {
//         allMarkdownRemark(
//           filter: { frontmatter: { templateKey: { eq: "course" } } }
//         ) {
//           edges {
//             node {
//               excerpt(pruneLength: 400)
//               id
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//                 templateKey
//                 date(formatString: "MMMM DD, YYYY")
//                 featuredpost
//                 featuredimage {
//                   childImageSharp {
//                     fluid(maxWidth: 120, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//         render={(data, count) => <CoursesCards data={data} count={count} />}
//     />
// )
