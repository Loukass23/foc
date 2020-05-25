import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { Typography } from '@material-ui/core'

export const IndexPageTemplate = ({
  image,
  title,
  heading,

}) => (
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
            backgroundSize: '100% 100%',
            position: 'absolute',
            display: 'flex',
            height: '100vh',
            width: '100vw',

            lineHeight: '1',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',

          }}
        >
          <Typography variant="h1"
            // className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              letterSpacing: 7,
              fontWeight: '100',
              fontSize: 100,
              // boxShadow:
              //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              // backgroundColor: 'rgb(255, 68, 0)',
              color: 'black',
              // lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </Typography>
          <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              // boxShadow:
              //   'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
              // backgroundColor: 'rgb(255, 68, 0)',
              color: 'black',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {heading}
          </h3>
        </div>
      </Link>
      {/* </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                    </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>*/}
    </div >
  )

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
