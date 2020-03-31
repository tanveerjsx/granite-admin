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
import {
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  div,
  Col,
  Input,
  Label,
  Form,
  FormGroup,
  Row
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import "../Setting/Settings.css";
import { connect } from "react-redux";
import { TiImage } from "react-icons/ti";
import CKEditor from "ckeditor4-react";

class Setting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <div>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Settings</h3>
                </CardHeader>

                {/* General Settings */}

                <div className="mainWrapper">
                  <Form>
                    <h1>General Settings</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store Email</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="email"
                          name="email"
                          placeholder="Expamle@mail.com"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store Phone :</Label>
                      </Col>
                      <Col sm="9">
                        <Input
                          type="text"
                          name="phonenumber"
                          placeholder="+923008175989"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <h1>Store Brand Setup</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store Logo :</Label>
                      </Col>
                      <Col sm="9">
                        <TiImage size={200} />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <label>Store Banner Type :</label>
                      </Col>
                      <Col sm="9">
                        <Input type="select" name="select">
                          <option>Static Image</option>
                          <option>Dynamic Image</option>
                          <option>Image</option>
                          <option>Image1</option>
                          <option>Image2</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store Banner :</Label>
                      </Col>
                      <Col sm="9">
                        <TiImage size={200} />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Mobile Banner :</Label>
                      </Col>
                      <Col sm="9">
                        <TiImage size={200} />
                      </Col>
                    </FormGroup>

                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <label>Store List Banner Type :</label>
                      </Col>
                      <Col sm="9">
                        <Input type="select" name="select">
                          <option>Static Image</option>
                          <option>Dynamic Image</option>
                          <option>Image</option>
                          <option>Image1</option>
                          <option>Image2</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store List Banner :</Label>
                      </Col>
                      <Col sm="9">
                        <TiImage size={200} />
                      </Col>
                    </FormGroup>
                    <Label className="secondryWrapper">
                      Shop Description :
                    </Label>
                    <FormGroup
                      row
                      componentClass="textarea"
                      className="secondryWrapper"
                    >
                      <Col sm="12">
                        <CKEditor>
                          <Input
                            type="textarea"
                            name="textarea"
                            placeholder=""
                            rows={8}
                          ></Input>
                        </CKEditor>
                      </Col>
                    </FormGroup>
                    <h1>Store Visibility Setup</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Store Name Postion</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="select"
                          name="select"
                          placeholder="On Banner"
                        >
                          <option>On Banner</option>
                          <option>On Flex</option>
                          <option>On ABC</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Products per page</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="number"
                          name="productsnum"
                          placeholder=""
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Hide Email From Store</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="checkbox"
                          name="select"
                          style={{ width: "50px", height: "25px" }}
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Hide Phone From Store</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="checkbox"
                          name="select"
                          style={{ width: "50px", height: "25px" }}
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Hide Address From Store</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="checkbox"
                          name="select"
                          style={{ width: "50px", height: "25px" }}
                        ></Input>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
                {/* General Settings */}
              </Card>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);
