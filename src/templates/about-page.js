import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const AboutPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  content,
  contentComponent
}) => {
  console.log('image2 :>> ', image);
  const AboutContent = contentComponent || Content
  return (
    <section className="hero is-fullheight-with-navbar"
    >
      <div className="hero-body"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 0
        }}>

        <div className="columns" style={{
          height: '100%',
          width: '100%',

        }}>
          {/* <Img style={{ width: '100%', height: '100%' }} fluid={!!image.childImageSharp ? image.childImageSharp.fluid : image.url} alt="" /> */}
          {/* <PreviewCompatibleImage imageInfo={image} /> */}

          <div className="column is-half"
            style={{
              // display: 'flex',
              height: '100%',
              // // width: '100%',
              // backgroundImage: `url(${
              //   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
              //   })`,
              // backgroundPosition: `top center`,
              // // backgroundAttachment: `fixed`,
            }}>
            {/* {!!image.childImageSharp ? <Img style={{ width: '100%', height: '100%' }} fluid={image.childImageSharp.fluid} alt="" /> :
              <img style={{ width: '100%', height: '100%' }} src={image} alt="" />} */}

            <PreviewCompatibleImage style={{ width: '100%', height: '100%' }} imageInfo={image} />

          </div>
          <div className="column is-half" style={{ justifyContent: 'center' }}>
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
            <AboutContent content={content} />
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
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  console.log('data', data)
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
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
        description
        }
      }
  }
`