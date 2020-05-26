import React from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6)
  },
}))

const BlogIndexPage = ({ location }) => {
  const classes = useStyles();

  return (
    <Layout location={location}>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.toolbar} />

        {/* <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
            backgroundColor: '#f40',
            color: 'white',
            padding: '1rem',
          }}
        >
          Latest Stories
          </h1>
      </div> */}
        {/* <section className="section">
          <div className="container">
            <div className="content"> */}
        <BlogRoll />
        {/*</div>
          </div> 
        </section>*/}
      </Container>
    </Layout>
  )
}
export default BlogIndexPage
