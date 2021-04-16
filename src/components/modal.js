import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import items from '../data.json'

export default class MyModal extends Component {
  constructor(props){
    super(props)
    this.state ={
      showModal: false
    }
  }
  

  closeModalHandler = () => {
    this.setState({
      showModal: false
    });
  }



  render(){
    return(
      <div>
        <Button variant="primary" onClick={()=> this.setState({showModal:true })}>
          More Details
        </Button>

        <Modal show={this.state.showModal} onClose={this.closeModalHandler}>
          <Modal.Header closeButton onClick={()=> this.setState({showModal:false })}>
            <Modal.Title>{items[this.props.index].keyword}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Card.Img src={items[this.props.index].image_url}></Card.Img>
            <Card.Body>
              <Card.Title>{items[this.props.index].title} </Card.Title>

              <Card.Text>
                Horn count: {items[this.props.index].horns}
              </Card.Text>
            
              <Card.Text>
                {items[this.props.index].description}
              </Card.Text>
      
            </Card.Body>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=> this.setState({showModal:false })}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </div>


      
    )
  }
}