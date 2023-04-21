import "./App.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer";
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}

    };
  }


  addBeast = () => {
    this.setState({
      beast: this.state.beast,
    });
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShow = (beastName) => {

    let selectedBeast = data.find(element => element.title === beastName);


    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });

  };

  render() {
    return (
      <>
        <Header beast={this.props.beast} />
        <Main
          addBeast={this.addBeast}
          data={data}
          handleOnShow={this.handleOnShow}
        />
        <Footer>Tim Maupin Produtions</Footer>

        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModal}
          handleOnHide={this.handleOnHide} />

        {/* <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
        </Modal> */}
      </>
    );
  }
}


export default App;
