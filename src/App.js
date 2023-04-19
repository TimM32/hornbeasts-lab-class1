import "./App.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: "",
      showModal: false,
      selectedBeast: ''

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
    this.setState({
      showModal: true,
      selectedBeast: beastName
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
        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}


export default App;
