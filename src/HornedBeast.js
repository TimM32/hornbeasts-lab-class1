import React from "react";
import Button from 'react-bootstrap/Button';
import './HornedBeast.css';

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

  render() {
    // console.log('got props:',this.props);
    return (
      <>
        <article>
          <h2>Animal: {this.props.title}</h2>
          <p>Favorites {this.state.favorites}</p>
          <Button onClick={this.handleFavorites}> 💖 </Button>
          <img src={this.props.imageUrl} alt={this.props.title} />
          <p>Description: {this.props.description}</p>
        </article>
      </>
    );
  }

}

export default HornedBeast;
