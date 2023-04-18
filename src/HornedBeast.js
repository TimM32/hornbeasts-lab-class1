import React from "react";

class HornedBeast extends React.Component {
    render() {
        return(
            <>
            <article>
                <h2>Animal: {this.props.animal}</h2>
                <h3>Horns: {this.props.horns}</h3>
                <p>Description: {this.props.description}</p>

            </article>
            
            
            </>
        );
    }

}


export default HornedBeast;