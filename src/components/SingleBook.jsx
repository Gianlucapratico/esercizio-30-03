import React, { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Col md={6} lg={3} key={book.id}>
        <Card
          className={
            this.state.selected ? "border border-danger border border-5" : null
          }
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.category}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{book.price}€</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
