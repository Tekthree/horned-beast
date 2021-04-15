import { CardColumns, Container, Card} from 'react-bootstrap';
import items from '../data.json';
import {Component} from 'react';

export default function Main(){

  

  return (
    <Container fluid>
      <CardColumns>

        {items.map(item =>{
          return(
            <HornedBeast
              title={item.title}
              description={item.description}
              imgUrl={item.image_url}
            />
          )
        })}
          <HornedBeast
          
          
          />
        
      </CardColumns>

      
    </Container>
    
    );
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
         <h2>Does this work</h2>
         <Card.Img src={this.props.imgUrl}></Card.Img>
         <Card.Body>
          <Card.Title>The Bumb {this.props.title} </Card.Title>
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

