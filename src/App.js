import "./App.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer";
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      sortedData: data

    };
  }

  handleSelected = (event) => {

    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(numHorns => numHorns.horns === 1);
      this.setState({ sortedData: newData });
    } else if (selected === '2') {
      let newData = data.filter(numHorns => numHorns.horns === 2);
      this.setState({ sortedData: newData });
    } else if (selected === '3') {
      let newData = data.filter(numHorns => numHorns.horns === 3);
      this.setState({ sortedData: newData });
    } else if (selected === '100') {
      let newData = data.filter(numHorns => numHorns.horns === 100);
      this.setState({ sortedData: newData });
    } else {
      this.setState({ sortedData: data });
    }
  };
}

addBeast = () => {
  this.setState({
    beast: this.state.beast + '',
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


    </>
  );
}
}


export default App;
