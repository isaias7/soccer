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
        console.log(live);
        this.setState({ allMatches: live });
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
    return (
      <div>
        <div className='col-md-1'>
          <li> { this.state.allMatches } </li>
        </div>
      </div>
    );
  }
}

AppContainer.defaultProps = {
  allMatches: [],
};

export default AppContainer;
