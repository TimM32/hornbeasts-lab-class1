import React from "react";
import './HornedBeast.css';
import { Card, Button, Col } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
      beastsNeeded: false
    };
  }

  handleFavorites = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };

  helpHandleOnshow = () => {
    this.props.helpHandleOnshow(this.props.title);
  };



  render() {
    // console.log('got props:',this.props);
    return (
      <>
        <article>



          <Col className="mt-4 ">
            <Card className="h-100 p-3">
              <Card.Title onClick={this.helpHandleOnShow}>
                {this.props.title}
              </Card.Title>
              <Card.Img
                className="mb-4 "
                src={this.props.imageURL}
                alt={this.props.title}
                title={this.props.title}
                onClick={this.props.addBeast}
              />
              <p>{this.state.favorites} Faves!</p>
              <p onClick={this.handleFavorites}>Click to favorite a beast!</p>
              <div>{this.state.beastNeeded ? 'I want this Beast!' : ''}</div>
              <Button onClick={this.pizzaNeeded} className="buttonMargin">I need Pizza!</Button>
              <Button variant="success" onClick={this.pizzaGot}>
              
              </Button>
            </Card>
          </Col>
        </article>



      </>
    );
  }

}

export default HornedBeast;
