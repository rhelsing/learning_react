import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>
             Hey, I am <a href="/pages/another_page">{this.props.name}</a>!
           </div>
  }
}

export default Hello;
