import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

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
          Is this my Modal
        </Button>

        <Modal show={this.state.showModal} onClose={this.closeModalHandler}>
          <Modal.Header closeButton onClick={()=> this.setState({showModal:false })}>
            <Modal.Title>Horned Beast</Modal.Title>
          </Modal.Header>
          <Modal.Body>We got that Modal Baby</Modal.Body>
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