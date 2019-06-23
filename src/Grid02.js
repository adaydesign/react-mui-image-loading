import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Image from 'material-ui-image'
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
    height: '400px',
  },
  gridListTile: {
    height: '100%',
  }
}));

const imageStyle = { width: 'inherit', height: 'inherit' }

  const tileData = [
    {
      img: "http://loremflickr.com/400/400",
      title: 'Image',
      author: 'author',
    },
    {
        img: "http://loremflickr.com/400/400",
        title: 'Image',
        author: 'author',
      },
      {
        img: "http://loremflickr.com/400/400",
        title: 'Image',
        author: 'author',
      },
      {
        img: "http://loremflickr.com/400/400",
        title: 'Image',
        author: 'author',
      },
  ];
 
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div >
      <GridList className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} style={{ height: 'auto' }}>
            <Image src={tile.img}  />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}