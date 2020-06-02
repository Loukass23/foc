import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'
import { makeStyles } from '@material-ui/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(6)
    },

    img: {
        display: 'flex',
        justifyContent: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
}));

export const FollowPageTemplate = ({
    igNodes
}) => {
    const classes = useStyles();
    console.log('igNodes :>> ', igNodes);
    return (
        <Container maxWidth="lg" className={classes.root}>
            <div className={classes.toolbar} />
            <GridList cellHeight={500} className={classes.gridList} cols={3}>
                {igNodes.map((tile) => (
                    <GridListTile key={tile.node.id} cols={1}>
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: tile.node.localFile,

                                style: { width: '500px' }
                            }} />
                    </GridListTile>
                ))}
            </GridList>
            {/* 
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12} md={6} className={classes.img}>
                    <PreviewCompatibleImage
                        imageInfo={{
                            image,
                            className: 'vintage',
                            style: { width: '500px' }
                        }} />

                </Grid>
                <Grid item xs={12} md={6} className={classes.content}>
                    <Typography variant="h3">
                        {heading}
                    </Typography>
                    <FollowContent content={content} className="about-content" />


                </Grid>
            </Grid> */}
        </Container>
    )
}

FollowPageTemplate.propTypes = {
    igNodes: PropTypes.array.isRequired,
}

const FollowPage = ({ data, location }) => {
    console.log('data', data)


    return (
        <Layout location={location}>
            <FollowPageTemplate
                igNodes={data.allInstaNode.edges}
            />
        </Layout>
    )
}

FollowPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default FollowPage

export const followPageQuery = graphql`
query {
  allInstaNode {
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
`