import React from 'react';

class SimpleAppBar extends React.Component {

  render() {
    return (
      <div>
        <div>
          <img width={40} src='/assets/logo.png'/>
        </div>
        <div>
          <div>Home</div>
          <div>About</div>
        </div>
      </div>
    );
  }

}

export default SimpleAppBar;
