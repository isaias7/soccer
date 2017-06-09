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
      home: '',
      away: '',
      time: '',
      score: ''
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
          // CHANGE TO IN PLAY -------^
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
  render() {

    if (this.state.allMatchesEvent === false) {
      //   this.getLiveScores();
      this.state.home = this.state.allMatches[2].home_name;
      this.state.away = this.state.allMatches[2].away_name;
      this.state.score = this.state.allMatches[2].score;
      this.state.time = this.state.allMatches[2].time;
    }
    // console.log('RESULTADO RENDER 😈');
    // console.log(this.state.allMatches);

    // console.log('RESULTADO 0 😂');
    // console.log(this.state.allMatches[0]);

    // const objeto = this.state.allMatches[0];

    // console.log('kdhjj objetoo ♥️');
    // console.log(objeto);

    // console.log('RESULTADO 1 ');
    // console.log(this.state.allMatches[1]);

    // console.log('RESULTADO 1 STATUS ⚽️');
    // console.log('Rnombre:' + this.state.time);
    // console.log(this.state.allMatches[1].status);
    return (
      <div className='row'>
        <div className='container'>
          <div className="col-md-12 flex-container">
            <li className='vs'>{this.state.home} </li>
            <li className='vs'>{this.state.score} </li>
            <li className='vs'>{this.state.away} </li>
            <li className='vs'>{this.state.time} </li>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-12"></div>
          <iframe className="video" width="100%" height="600" src="https://www.youtube.com/embed/l1FJfr_spJQ" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

AppContainer.defaultProps = {
  allMatches: [],
  home: '',
  away: '',
  time: '',
  score: ''
};

export default AppContainer;
