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
  Container,
  Col,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import "../Setting/Settings.css";
import { connect } from "react-redux";

class StoreSetting extends React.Component {
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
                  <h3 className="mb-0"> Store Settings</h3>
                </CardHeader>

                {/* Store Settings */}

                <div className="mainWrapper">
                  <Form>
                    <h1>Store Address</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Street</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="text"
                          name="address"
                          placeholder="Street Address"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Street 2</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="text"
                          name="address1"
                          placeholder="Appartment,Suit,Unit Etc (Optional)"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>City/Town</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="text"
                          name="city"
                          placeholder="City / Town"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Postal Code/Zip</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="text"
                          name="postal Code"
                          placeholder="Postal Code/Zip"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Country</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="select"
                          name="country"
                          placeholder="Pakistan"
                        >
                          <option>Pakitan</option>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>Itly</option>
                          <option>Turky</option>
                          <option>China</option>
                          <option>Japan</option>
                          <option>England</option>
                          <option>Russia</option>
                          <option>Afghanistan</option>
                          <option>Iran</option>
                          <option>Span</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>State/Country</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="select"
                          name="country"
                          placeholder="Select an Option"
                        >
                          <option>Select an Option</option>
                          <option>Pakitan</option>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>Itly</option>
                          <option>Turky</option>
                          <option>China</option>
                          <option>Japan</option>
                          <option>England</option>
                          <option>Russia</option>
                          <option>Afghanistan</option>
                          <option>Iran</option>
                          <option>Span</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <h1>Store Loction</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Find Store</Label>
                      </Col>

                      <Col sm="9">
                        <Input
                          type="search"
                          name="loction"
                          placeholder="Type An Address to Find"
                        ></Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3"></Col>
                      <Col sm="9">
                        <div class="mapouter">
                          <div class="gmap_canvas">
                            <iframe
                              width="600"
                              height="500"
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=hashlogics&t=&z=13&ie=UTF8&iwloc=&output=embed"
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                            ></iframe>
                          </div>
                        </div>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
                {/* Store Settings */}
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

export default connect(mapStateToProps, mapDispatchToProps)(StoreSetting);
