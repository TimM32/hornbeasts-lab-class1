import "./App.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer";
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
// import Button from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      sortedData: data

    };
  }



  // addBeast = () => {
  //   this.setState({
  //     beast: this.state.beast + '',
  //   });
  // };

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

  handleSubmit = (event) => {
    event.preventDefault();
  }


  render() {
    let data = this.state.sortedData.map((hornsNum, index) => {
      return hornsNum;
    })
  


  return(
    <>
      <Header beast={this.state.beast} />

      <Form>
        <Form.Group>
          <label>Number of Horns</label>
          <Form.Select title="selected" onChange={this.handleSelected}>
          <option value="All"> All</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="100"> 100</option>
          </Form.Select>
        </Form.Group>
        {/* <Button type="submit">Submit</Button> */}
      </Form>


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
