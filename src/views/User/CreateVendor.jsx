/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
// core components
import Header from "../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";

import * as productActions from "../../store/actions/productActions";

class AddVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: "",
        price: 0,
        stock: 0,
        description: "",
        keyworkd: "",
        category: "",
        productPic: [
          {
            img:
              "https://i.pinimg.com/originals/9e/3d/ab/9e3dab2a26484110f26a2e0c496e33c5.jpg"
          }
        ],
        vendor: this.props.auth.user
      }
    };
  }

  componentWillMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/auth/login");
    }
  }

  componentWillReceiveProps(nextProps) {
    this.props.history.push("/admin/products");
  }

  handleInputChange = ({ currentTarget: input }) => {
    let product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
  };

  handleSubmit = () => {
    const { token } = this.props.auth;
    const { product } = this.state;
    this.props.addProduct(product, token);
    this.props.history.push("/admin/products");
  };

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <Col lg="6" md="6" style={{ margin: "auto" }}>
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                  <div className="text-center text-muted mb-4">
                    <p>Add a vendor</p>
                  </div>
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Store Name"
                          name="storeName"
                          type="text"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="First Name"
                          name="firstName"
                          type="text"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Last Name"
                          name="lastName"
                          type="text"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Total number of products"
                          name="noOfProduct"
                          type="number"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                    </FormGroup>

                    <div className="text-center">
                      <Button
                        className="my-4"
                        onClick={this.handleSubmit}
                        color="primary"
                        type="button"
                      >
                        Add
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    product: state.product,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(productActions.getProducts()),
    addProduct: (product, token) =>
      dispatch(productActions.addProduct(product, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVendor);
