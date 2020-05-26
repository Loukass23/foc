import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../gatsby-theme-material-ui-top-layout/theme'
const HomePagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <ThemeProvider theme={theme}>

      <HomePageTemplate
        image={getAsset(entry.getIn(['data', 'image']))}
        title={entry.getIn(['data', 'title'])}
        heading={entry.getIn(['data', 'heading'])}
        description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
      />
    </ThemeProvider>
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default HomePagePreview
