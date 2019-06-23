import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid01 from './Grid01'
import Grid02 from './Grid02'
import Image from 'material-ui-image'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <div>
        Material-ui-image
        <ul>
          <li>Install(Required)</li>
          <li>npm install @material-ui/core</li>
          <li>npm install @material-ui/icons</li>

          <li>Image</li>
          <li>npm install material-ui-image</li>
        </ul>
      </div>
      <Grid container>
        <Grid item xs={3}><Image src="http://loremflickr.com/250/250" /></Grid>
        <Grid item xs={3}><Image src="http://loremflickr.com/250/250" /></Grid>
        <Grid item xs={3}><Image src="http://loremflickr.com/250/250" /></Grid>
        <Grid item xs={3}><Image src="http://loremflickr.com/250/250" /></Grid>

        <Grid item xs={12}>
          <div>
            @material-ui/core/GridList
            <ul>
              <li>https://material-ui.com/api/grid-list/#gridlist-api</li>
            </ul>
          </div>
          <Grid01 />
        </Grid>
        <Grid item xs={12}>
          <div>
            @material-ui/core/GridList + Material-ui-image
          </div>
          <Grid02 />
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
