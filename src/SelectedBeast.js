import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>

        <Modal show={this.props.show} onHide={this.props.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} alt={this.props.title} className='img-fluid'/>
            </Modal.Body>
          <Modal.Footer>{this.props.selectedBeast.description}</Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;