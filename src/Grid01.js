import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
}));


  const tileData = [
    {
      img: "http://loremflickr.com/300/200",
      title: 'Image',
      author: 'author',
    },
    {
        img: "http://loremflickr.com/300/200",
        title: 'Image',
        author: 'author',
      },
      {
        img: "http://loremflickr.com/300/200",
        title: 'Image',
        author: 'author',
      },
      {
        img: "http://loremflickr.com/300/200",
        title: 'Image',
        author: 'author',
      },
  ];
 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}