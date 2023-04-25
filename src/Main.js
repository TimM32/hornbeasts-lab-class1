import React from "react";
import HornedBeast from "./HornedBeast";
import data from './data.json';
import { Container, Row } from 'react-bootstrap';
import './main.css';



class Main extends React.Component {
    render () {
        let beast = [];
        this.props.data.map((newBeast, index) => {
            return beast.push(
                <HornedBeast 
                title={newBeast.title} 
                image_url={newBeast.image_url} 
                description={newBeast.description}
                key={index}
                handleOnShow={this.props.handleOnShow}
                data={this.props.data}
                 />
            )
        });


            return (
                <main>
                    <Container>
                        <Row lg={4} md={3} sm={2} xs={1}>
                            {beast}
                        </Row>
                    </Container>
                </main>
            );
        }
    }

export default Main;