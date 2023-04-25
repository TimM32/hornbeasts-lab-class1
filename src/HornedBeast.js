import React from "react";
import './HornedBeast.css';
import { Card, Button, Col } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,

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
            <Card className="card">
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Img className="mb-4" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.helpHandleOnShow} />
              <p>Favorited {this.state.favorites + ' '} times</p>
              <Button onClick={this.handleFavorites}> ❤️ </Button>
            </Card>
          </Col>
        </article>




      </>
    );
  }

}

export default HornedBeast;
