import {CardColumns, Container, Card, Navbar} from 'react-bootstrap';
import items from '../data.json';
import React, {useRef, useEffect} from 'react';
import { ReactComponent as Logo } from '../beast.svg';
import{TweenMax, Power3} from 'gsap'
import MyModal from './modal.js'


export default function Main(){
  let navItem = useRef(null)
  let cards = useRef(null)
  
  useEffect(() => {
    console.log(navItem)
    TweenMax.to(
      navItem,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
      
    )
    TweenMax.to(
      cards,
      .8,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .6
      }
      
    )
    

  }, [])



  return (
    <div>
      <div className="logo-contain">
        <Logo ref={el=>{navItem = el}} className="logo"/> 
      </div>
    <Container fluid className="dropdown-filter">
       <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Horned Beast</Navbar.Brand>
      </Navbar>
    </Container>

     
    <Container fluid>
      
      <CardColumns ref={el=>{cards = el}} className='beast'>
        {items.map((item,index) =>{
          return(
            <>
              <HornedBeast
                title={item.title}
                description={item.description}
                imgUrl={item.image_url}
                index={index}
                
              />
              
            </>
          )
        })}
      </CardColumns>
    </Container>

    </div>
    
    );
}

class HornedBeast extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      likes: 0,
      index: this.props.index
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
          
              
              <MyModal
                index={this.state.index}
              />
                
              
            
          </Card.Body>

       </Card>
     )
  

  }

 
}

