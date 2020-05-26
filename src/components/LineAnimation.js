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
import SVGLines from "../../public/assets/lines3.svg";
// import SVGLines from "../../public/assets/compoundLines.svg";


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    // card: {
    //     backgroundColor: "#343730",
    //     // backgroundColor: "rgba(0, 0, 0, 0)",
    //     boxShadow: `5px 10px ${theme.palette.secondary.main}`,

    //     position: 'relative',
    //     height: 200,
    //     // display: 'flex',
    //     // flexDirection: 'column',
    //     // justifyContent: 'space-between',
    //     '&:hover': {
    //         boxShadow: `5px 10px ${fade(theme.palette.secondary.main, 0.5)}`,
    //         // backgroundColor: fade(theme.palette.secondary.main, 0.5),
    //         // animation: "grow 1s",
    //         animationName: '$grow',
    //         animationFillMode: 'forwards',
    //         animationDuration: '1s'

    //     },
    // },
    // '@keyframes grow': {
    //     from: {
    //         transform: 'scale(1)',
    //         // opacity: 0.1,
    //     },
    //     to: {
    //         transform: 'scale(1.1)',
    //         // opacity: 0.3,
    //     },
    // },
    svg: {
        opacity: .2,
        position: 'absolute',
        width: '100%',
        top: '30vh'
    },

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


const LineAnimation = () => {
    const classes = useStyles();
    // const url = location.pathname;
    // const { languages } = useSiteMetadata();

    return (
        // <div style={{ position: 'relative' }}>
        <div className={classes.svg}>
            <SVGLines
                // viewBox="0 0 100 100"
                fill="black"
            // fill="#c9c9c9" 
            />
        </div>

        // </div>
    );
}
export default LineAnimation
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
