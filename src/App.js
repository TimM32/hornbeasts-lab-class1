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
      
    }
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
