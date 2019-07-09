import React from 'react';

import Homepage from './Homepage';
import AboutPage from './AboutPage';
import SimpleAppBar from '../components/AppBar';

class Root extends React.Component {

  render() {
    return (
      <div>
        <SimpleAppBar />
        <Homepage />
        <AboutPage />
      </div>
    );
  }
  
};

export default Root;
