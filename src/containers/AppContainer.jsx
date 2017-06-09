import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { Redirect } from 'react-router';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMatches: [],
      allMatchesEvent: true,
      time: ''
    };
  }
  componentDidMount() {
    this.getLiveScores();
  }
  getLiveScores() {
    axios
      .get('http://livescore-api.com/api-client/scores/live.json?key=IWQZkJiw9kw245Vj&secret=7rgXMMrVXdfPQXozTezeYRK7chahm6Bu')
      .then((res) => {
        // console.log(res.data.data.match);
        // this.setState({ allMatches:res.data});
        const live = res.data.data.match.filter(function (match) {
          return (match.status === 'IN PLAY');
        });
        console.log('RESULTADO GET LIVE AXIOS ');
        console.log(live);
        this.setState({ allMatches: live, allMatchesEvent: false });
        //  console.log(res.data[0].id);
      })
      .catch(err => {
        console.log(err);
      });
  }
  // getLiveScores() {
  //   //.get('http://livescore-api.com/api-client/scores/live.json?key=IWQZkJiw9kw245Vj&secret=7rgXMMrVXdfPQXozTezeYRK7chahm6Bu')
  //   axios.get('', {
  //     headers: { 'X-Mashape-Key': '' },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({ allMatches: res.data });
  //       console.log(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     });
  // }
  render() {

    if (this.state.allMatchesEvent === false) {
      //   this.getLiveScores();
      this.state.time = this.state.allMatches[1].home_name;
    }
    console.log('RESULTADO RENDER 😈');
    console.log(this.state.allMatches);

    console.log('RESULTADO 0 😂');
    console.log(this.state.allMatches[0]);

    const objeto = this.state.allMatches[0];

    console.log('kdhjj objetoo ♥️');
    console.log(objeto);
    
    console.log('RESULTADO 1 ');
    console.log(this.state.allMatches[1]);

    console.log('RESULTADO 1 STATUS ⚽️');
    console.log('Rnombre:' + this.state.time);


    // console.log(this.state.allMatches[1].status);
    return (
      <div>
        <div className='col-md-1'>
          <li> {this.state.time} </li>
        </div>
      </div>
    );
  }
}

AppContainer.defaultProps = {
  allMatches: [],
  time: ''
};

export default AppContainer;
