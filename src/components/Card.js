import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { AnimatedOnScroll } from 'react-animated-css-onscroll'

class Card extends Component {
  state = {
    modalIsOpen: false,
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    })
  }

  render() {
    const { title, short, img, id, long } = this.props
    return (
      <AnimatedOnScroll animationIn="fadeIn" animationInDuration={1500}>
        <div className="card rounded-lg justify-content-center shadow">
          <img src={img} alt={id} className="card-img-top mt-4" />
          <div className="card-body ">
            <div className="title">
              <h5 className="card-title">{title}</h5>
            </div>
            <p className="card-text">{short}</p>
          </div>
          <button
            className="btn btn-dark px-5 py-2 mb-4"
            onClick={this.toggleModal}
          >
            Find Out More
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            centered={true}
            className="shadow-lg"
          >
            <ModalHeader toggle={this.toggleModal}>{title}</ModalHeader>
            <ModalBody>{long}</ModalBody>
          </Modal>
        </div>
      </AnimatedOnScroll>
    )
  }
}

export default Card
