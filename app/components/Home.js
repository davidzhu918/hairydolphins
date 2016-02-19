import React from 'react';
import {Link} from 'react-router';
import SearchBox from './SearchBox';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <SearchBox />
        </div>
      </div>
    );
  }
}

export default Home;