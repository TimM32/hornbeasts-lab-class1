import React from "react";
import HornedBeast from "./HornedBeast";

import './main.css';



class Main extends React.Component {
    render() {
        let beast = [];
        this.props.data.map((newBeast, index) => {
            return beast.push(
                <HornedBeast
                    title={newBeast.title}
                    imageUrl={newBeast.imageUrl}
                    description={newBeast.description}
                    key={index}
                    addBeast={this.props.addBeast}
                    handleOnShow={this.props.handleOnShow}
                />
            );
        });


        return (
            <main>
                <Container>
                <Row lg={4} md={3} sm={2} xs={1}>
                </Container>
                </Row>
              
                {HornedBeast}
            </main>
        );
    }
}

export default Main;