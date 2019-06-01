import React from 'react';
import Modal from 'react-bootstrap/Modal';


class MyVerticallyCenteredModal extends React.Component {
  render(props) {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <span>
            <img className="modal-image" src={this.props.image} alt="portfolio" />
          </span>
        </Modal.Body>
      </Modal>
    );
  }
}

class PortfolioCard extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
        <span>
          <span>
            <img onClick={() => this.setState({ modalShow: true })} className="portfolio-images" src={this.props.image} alt="portfolio" />
          </span>

          <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={modalClose}
            image={this.props.image}
          />
        </span>
    );
  }
}

export default PortfolioCard;
