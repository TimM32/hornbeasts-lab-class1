import React from "react";

class HornedBeast extends React.Component {

  render() {
    console.log('got props:',this.props);
    return (
      <>
        <article>
           <h2>Animal: {this.props.title}</h2>
           <img src={this.props.imageUrl} alt={this.props.title} />
           <p>Description: {this.props.description}</p>
        </article>
      </>
    );
  }

}

export default HornedBeast;
