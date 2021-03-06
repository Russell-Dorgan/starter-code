//7 Hours 2 Minutes for reducer information to make it connect


import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

import Scream from '../components/Scream';
import Profile from '../components/Profile';

class home extends Component {
  state = {
    screams: null
  }
  componentDidMount(){
    axios.get('https://europe-west1-socialape-d081e.cloudfunctions.net/api/screams')
      .then(res => {
        console.log(res.data)
        this.setState({
          screams: res.data
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map((scream) => <Scream scream={scream}/>)
    ) : (
      <p>Loading...</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile/>
        </Grid>
      </Grid>
    );
  }
}

export default home;