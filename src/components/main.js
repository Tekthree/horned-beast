import {CardColumns, Container, Card} from 'react-bootstrap';
import items from '../data.json';
import {Component, useRef} from 'react';

import{tweenMax, Power3} from 'gsap'

export default function Main(){
  let navItem = useRef(null)

  console.log(navItem);

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
          
        
      </CardColumns>

      
    </Container>
    
    );
}

class HornedBeast extends Component{

  constructor(props){
    super(props);
    this.state = {
      likes: 0
    }

  }

  addFavorite = () =>{
    this.setState({likes: this.state.likes + 1});
  }
  
  render() {
    
     return (
       <Card
        bg="dark"
        text="light"
        onClick={this.addFavorite}
       >
         
         <Card.Img src={this.props.imgUrl}></Card.Img>
         <Card.Body>
          <Card.Title>The Bumb {this.props.title} </Card.Title>
          <Card.Text>
            😍 = {this.state.likes}

          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>

       </Card>
     )
  

  }

 
}

