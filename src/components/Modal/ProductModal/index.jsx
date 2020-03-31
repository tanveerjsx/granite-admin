import React from "react";
import Modal from "react-modal";
import { FaEye, FaEdit, FaTrash, FaCheck, FaWindowClose } from "react-icons/fa";
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
      <div class="containerModal">
        <Container>
          <Row>
            <Col sm="5">
              <div class="images">
                <img class="image" src={`${base_url}/${props.image}`} alt="" />
              </div>
            </Col>
            <Col sm="7">
              <div class="product">
                <p>
                  <em>
                    {props.product && props.product.sku
                      ? props.product.sku
                      : "No keyword"}
                  </em>{" "}
                  &nbsp; &nbsp;
                  {props.product.isPublish ? (
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
                </p>
                <h1>{props.product.name}</h1>
                <h2>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#fb6340"
                    }}
                  >
                    ${props.product.price}
                    <br />
                  </span>
                  <span
                    style={{
                      color: "Green"
                    }}
                  >
                    ${props.product.finalPrice}
                  </span>
                  &nbsp; &nbsp; <FaEye size={"17px"} />
                  &nbsp;{props.product.views}{" "}
                  {/* ${props.product.price} &nbsp; &nbsp; <FaEye size={"17px"} />
                  &nbsp;{props.product.views}{" "} */}
                </h2>
                {props.product.stock > 0 ? (
                  <span className="inStock">
                    <FaCheck />
                    {props.product.stock} in stock
                  </span>
                ) : (
                  <span className="outStock">
                    <FaWindowClose />
                    {props.product.stock} in stock
                  </span>
                )}
                <p class="desc">{props.product.description}</p>
                <div class="buttons">
                  <button
                    onClick={() => props.handleEdit(props.product._id)}
                    className="btn-sm btn-info editModal"
                    style={{ padding: "0px" }}
                  >
                    Edit <FaEdit />
                  </button>
                  <button
                    onClick={() => props.handleDelete(props.product._id)}
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
