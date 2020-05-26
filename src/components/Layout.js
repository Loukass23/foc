import React from 'react'
import Helmet from './Helmet'
import Footer from './Footer'
import Navbar from './Navbar'
// import './all.sass'
import { makeStyles } from "@material-ui/core/styles";
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  mainContainer: { minHeight: '50vh' }
}));
const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata()
  const url = location.pathname
  const navColor = url === '/home' ? 'white' : 'black'
  return (
    <div>
      <Helmet />
      <Navbar url={url} color={navColor} />

      <div> {children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
