import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import Features from '../components/Features'
import LineAnimation from '../components/LineAnimation'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  title: {
    letterSpacing: 7,
    fontWeight: '100',
    fontSize: 30,
    // boxShadow:
    //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
    // backgroundColor: 'rgb(255, 68, 0)',
    color: 'black',
    // lineHeight: '1',
    padding: '0.25em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 50,

    },
    [theme.breakpoints.up('md')]: {
      fontSize: 100,

    },
  },
  heading: {
    fontWeight: '50',
    fontSize: 10,
    color: 'black',
    padding: '0.25em',
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,

    },
    [theme.breakpoints.up('md')]: {
      fontSize: 40,

    },
  }
}
))

export const IndexPageTemplate = ({
  image,
  title,
  heading,

}) => {
  const classes = useStyles();

  return (
    <div>
      <Helmet />
      <Link to='/home'>

        <div
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              })`,
            backgroundPosition: `center`,
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
            position: 'absolute',
            display: 'flex',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            lineHeight: '1',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

          }}
        >
          <LineAnimation />
          <Typography variant="h1"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography variant="h2"
            className={classes.heading}
          >
            {heading}
          </Typography>

        </div>
      </Link>

    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    // <Layout>
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
    />
    // </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
          markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
          frontmatter {
          title
        image {
          childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid
        }
          }
        }
        heading
      }
    }
  }
`
