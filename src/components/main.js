import { CardColumns, Container, Card} from 'react-bootstrap';
import items from '../data.json';
import {Component} from 'react';

function Main(){

  

  return (
    <Container fluid>

      <CardColumns>
        {items.map(item => {
          <HornedBeast/>
        })}  
      </CardColumns>
      
    </Container>
    
    )
}

class HornedBeast extends Component{

  constructor(props){
    super(props);

  }
  
  render() {
    
     return (
       <Card
        bg="dark"
        text="light"
       >
         <Card.Body>
          <Card.Title>The Bumb </Card.Title>
          <Card.Text>
            😍 = is this working

          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>

       </Card>
     )
  

  }

 
}

export default Main;