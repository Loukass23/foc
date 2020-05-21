import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  return (
    <section className="hero is-fullheight-with-navbar"
    >
      <div className="hero-body"
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}>

        <div className="columns" style={{
          height: '100%',
          width: '100%'
        }}>
          <div className="column is-half"
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${
                !!image ? image.childImageSharp.fluid.src : image
                })`,
              backgroundPosition: `top center`,
              backgroundAttachment: `fixed`,
            }}>
            First column
          </div>
          <div className="column is-half">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
          </div>
        </div>

      </div>
    </section>
    /* <section className="section section--gradient"
      style={{ position: 'absolute', width: '100vw', height: '100vh' }}>
      <div className="container"
      >
        <div className="columns">
          <div className="column"
            style={{
              height: '100',
              backgroundImage: `url(${
                !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                })`,
              backgroundPosition: `top center`,
              backgroundAttachment: `fixed`,
            }}>
            First column
          </div>
          <div className="column">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
          </div>
          <div className="column is-10 is-offset-1">
            <div className="section">

              <PageContent className="content" content={content} />
            </div> 
        </div>
        </div>
      </div>
    </section>*/
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
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`