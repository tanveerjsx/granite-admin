import React from "react";
import Modal from "react-modal";
import { FaEye, FaTrash, FaCheck, FaWindowClose } from "react-icons/fa";

import { Row, Col, Container } from "reactstrap";
import "./style.css";
import { base_url } from "./../../../Utils";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    padding: 0
  }
};
const PopUpModal = props => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="containerModal">
        <Container>
          <Row>
            <Col sm="5">
              <div className="images">
                <img
                  className="image"
                  src={`${base_url}/${props.image}`}
                  alt=""
                />
              </div>
            </Col>
            <Col sm="7">
              <div className="product">
                <p>
                  <em>
                    <strong>
                      {props.article && props.article.name
                        ? `Store: ${props.article.name.toUpperCase()}`
                        : ""}
                    </strong>
                  </em>
                </p>
                <h2>
                  {props.article.isPublished ? (
                    <span
                      className="badge badge-success"
                      style={{ fontSize: "14px" }}
                    >
                      Published
                    </span>
                  ) : (
                    <span
                      className="badge badge-warning"
                      style={{ fontSize: "14px" }}
                    >
                      Pending
                    </span>
                  )}
                  <div>
                    <FaEye size={"20px"} />
                    {props.article.views}
                  </div>
                </h2>
                {/* <h1>{props.product.name}</h1>*/}

                {/* {props.product.stock > 0 ? (
                  <span className="inStock">
                    <FaCheck />
                    {props.product.stock} in stock
                  </span>
                ) : (
                  <span className="outStock">
                    <FaWindowClose />
                    {props.product.stock} in stock
                  </span>
                )} */}
                <p className="desc">{props.article.content}</p>
                <div className="buttons">
                  <button
                    onClick={() => props.handleDelete(props.article._id)}
                    className="btn-sm btn-danger deleteModal"
                  >
                    Delete <FaTrash />
                    {/* <span>♥Delete</span> */}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Modal>
  );
};

export default PopUpModal;
