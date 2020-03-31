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
import Header from "../../components/Headers/DefaultHeader.jsx";
import "../Setting/Settings.css";
import { connect } from "react-redux";

class PaymentSetting extends React.Component {
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
                    <h1>Payment Settings</h1>
                    <FormGroup row className="secondryWrapper">
                      <Col sm="3">
                        <Label>Prefered Payment Method</Label>
                      </Col>

                      <Col sm="9">
                        <Input type="select" name="policylable" placeholder="">
                          <option>Choose Withdrawal Payment Method</option>
                          <option>Paypal</option>
                          <option>Bank Transfer</option>
                        </Input>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSetting);
