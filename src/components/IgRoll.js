import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { instagram } from '../../static/pages.json'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import SharePopup from './SharePopup'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    // marginTop: -20,

  },



}))

const IgRoll = ({ data }) => {
  const classes = useStyles();
  console.log('data :>> ', data);
  const igNodes = data.allInstaNode.edges
  // const { edges: posts } = data.allMarkdownRemark
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  // const shareUrl = 'http://github.com';
  // const title = 'GitHub';

  return (
    <Grid container className={classes.container} spacing={0}>

      {igNodes.map((tile) => (
        <Grid item key={tile.node.id} xs={12} sm={6} md={4} lg={2} >
          <a href={`${instagram}/p/${tile.node.id}`} target="_blank">
            <PreviewCompatibleImage
              imageInfo={{
                image: tile.node.localFile,
                style: { width: 250, height: 250, marginLeft: 'auto', marginRight: 'auto' }
              }} /></a>
        </Grid>
      ))}
    </Grid>)

}

IgRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
query {
  allInstaNode(limit: 6 ,sort: {fields: timestamp, order: DESC}) {
    edges {
      node {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        # Only available with the public api scraper
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
`}
    render={(data, count) => <IgRoll data={data} count={count} />}
  />
)
