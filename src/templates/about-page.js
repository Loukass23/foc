import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6)
  },
  img: {
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}));

export const AboutPageTemplate = ({
  image,
  heading,
  content,
  contentComponent,
}) => {
  const classes = useStyles();
  const AboutContent = contentComponent || Content
  return (
    <Container maxWidth="xl" className={classes.root}>
      <div className={classes.toolbar} />
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12} md={6} className={classes.img}>
          <PreviewCompatibleImage
            imageInfo={{
              image,
              className: 'vintage',
              style: { width: '500px' }
            }} />

        </Grid>
        <Grid item xs={12} md={6} className={classes.content}>
          <Typography variant="h3">
            {heading}
          </Typography>
          <AboutContent content={content} className="about-content" />


        </Grid>
      </Grid>
    </Container>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, location }) => {
  console.log('data', data)
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout location={location}>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        content={html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
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