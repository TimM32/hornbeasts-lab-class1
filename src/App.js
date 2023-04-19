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
    

  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}


export default App;
