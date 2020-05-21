import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = {
    border: 'solid #fff',
    borderWidth: '6px 6px 20px 6px',
    boxShadow: '1px 1px 5px #333',
    // height: 200px;
    // width: 200px; 
    // borderRadius: '5px'
  }
  const { alt = '', childImageSharp, image } = imageInfo
  console.log('image', imageInfo)
  if (!!image && !!image.childImageSharp) {
    return (
      <Img className="vintage" style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img className="vintage" style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img className="vintage" style={imageStyle} src={image} alt={alt} />

  if (!!imageInfo)
    return <img style={imageStyle} src={imageInfo} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
