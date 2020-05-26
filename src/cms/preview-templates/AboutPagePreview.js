import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <ThemeProvider theme={theme}>
      <AboutPageTemplate
        image={getAsset(entry.getIn(['data', 'image']))}
        heading={entry.getIn(['data', 'heading'])}
        content={widgetFor('body')}
      />
    </ThemeProvider>
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
