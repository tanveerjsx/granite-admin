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
  Row,
  Button
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import "../Setting/Settings.css";
import { connect } from "react-redux";
import { TiCamera } from "react-icons/ti";
import CKEditor from "ckeditor4-react";

class PolicySetting extends React.Component {
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
                  {/* <h3 className="mb-0">Policies Settings</h3> */}
                </CardHeader>

                {/* General Settings */}

                <div className="mainWrapper">
                  <Form>
                    <h1>Policies Settings</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Policy Tab Lable</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="text"
                          name="policylable"
                          placeholder=""
                        ></Input>
                      </Col>
                    </FormGroup>
                    <Label className="secondryWrapper">Shipping Policy :</Label>

                    <FormGroup
                      row
                      componentClass="textarea"
                      className="secondryWrapper"
                    >
                      <Col sm="12">
                        <Button style={{ margin: "5px" }}>
                          <TiCamera size="20px" />
                          ADD MEDIA
                        </Button>
                        <CKEditor>
                          <Input
                            type="textarea"
                            name="shippingpolicy"
                            placeholder=""
                            rows={8}
                          ></Input>
                        </CKEditor>
                      </Col>
                    </FormGroup>
                    <Label className="secondryWrapper">Refund Policy :</Label>
                    <FormGroup
                      row
                      componentClass="textarea"
                      className="secondryWrapper"
                    >
                      <Col sm="12">
                        <Button style={{ margin: "5px" }}>
                          <TiCamera size="20px" />
                          ADD MEDIA
                        </Button>
                        <CKEditor>
                          <Input
                            type="textarea"
                            name="Refundplolicy"
                            placeholder=""
                            rows={8}
                          ></Input>
                        </CKEditor>
                      </Col>
                    </FormGroup>
                    <Label className="secondryWrapper">
                      Cancellation/Return/Exchange/ Policy :
                    </Label>
                    <FormGroup
                      row
                      componentClass="textarea"
                      className="secondryWrapper"
                    >
                      <Col sm="12">
                        <Button style={{ margin: "5px" }}>
                          <TiCamera size="20px" />
                          ADD MEDIA
                        </Button>
                        <CKEditor>
                          <Input
                            type="textarea"
                            name="cancellationplolicy"
                            placeholder=""
                            rows={8}
                          ></Input>
                        </CKEditor>
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

export default connect(mapStateToProps, mapDispatchToProps)(PolicySetting);
