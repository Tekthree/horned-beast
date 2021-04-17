import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";

export default class dropDrop extends Component {
  handleDrop = (e) => {
    this.props.hornValue(parseInt(e.target.value));
  };

  render() {
    return (
      <div>
        <Container fluid className="dropdown-filter">
          <Form.Group controlId="exampleForm.SelectCustomSizeLg">
      
            <Form.Control
              as="select"
              size="lg"
              onChange={this.handleDrop}
              custom
            >
              <option value="">Filter By Horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">WOW</option>
            </Form.Control>
          </Form.Group>
        </Container>
      </div>
    );
  }
}
