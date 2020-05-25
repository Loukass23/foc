import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
const AboutPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ThemeProvider theme={theme}>

      <AboutPageTemplate
        image={getAsset(entry.getIn(['data', 'image']))}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
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
