import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>
             Hey, I am a {this.props.name}!
           </div>
  }
}

export default Hello;
