import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap';

export default class dropDrop extends Component {
  handleDrop = (e)=>{
    this.props.filter(parseInt(e.target.value));
  }

  render() {
    return (
      <div>
        <Container fluid className="dropdown-filter" >
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Custom select Large</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.handleDrop} custom>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='100'>WOW</option>
            </Form.Control>
          </Form.Group>
        </Container>
        
      </div>
    )
  }
}
