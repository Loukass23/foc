import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
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
  console.log('url :>> ', url);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Quicksand"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar url={url} />
      {/* {url !== '/home' && <div className={classes.toolbar} />} */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
