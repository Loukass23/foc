import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import SharePopup from './SharePopup'


const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },

  popup: {
    // margin: theme.spacing(4)
  }
}))

const BlogRoll = ({ data }) => {
  const classes = useStyles();
  const { edges: posts } = data.allMarkdownRemark
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const shareUrl = 'http://github.com';
  const title = 'GitHub';

  return (
    <Grid container className={classes.container} spacing={2}>
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item xs={12} md={6} className={classes.img} key={post.id}>
            <Card className={classes.root}>
              <CardActionArea component={Link} to={post.fields.slug}>
                {post.frontmatter.featuredimage &&
                  <CardMedia
                    // className={classes.media}
                    children={
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          style: { height: 140 }
                        }}
                      />
                    }
                  />}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.frontmatter.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {post.frontmatter.date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={handleClick} size="small" color="primary">
                  Share
        </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                // classes={{ paper: { opacity: .1 } }}
                >
                  <SharePopup url={post.fields.slug} quote={post.frontmatter.title} />
                </Popover>
                <Button size="small" component={Link} to={post.fields.slug} color="primary">
                  Keep Reading
        </Button>
              </CardActions>
            </Card>
            {/* <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
            >
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button" to={post.fields.slug}>
                  Keep Reading →
                  </Link>
              </p>
            </article> */}
          </Grid>
        ))}
    </Grid>)

}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
