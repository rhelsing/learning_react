import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Hello from 'components/hello'

class CardExampleCard extends React.Component {
  render() {
    return <Card>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in {this.props.year}!
        </span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville. <Hello name={this.props.year}></Hello>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
    <div><a href="/pages/index">Back</a></div>
  </Card>
  }
}

export default CardExampleCard
