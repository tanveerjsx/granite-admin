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
import Joi from "joi-browser";
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
  Container,
  Alert,
  FormText
} from "reactstrap";
import Header from "../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import * as couponActions from "../../store/actions/couponAction";
import * as Const from "../../Utils";
import { couponSchema } from "../../Utils/Schemas/coupon";
import { authSelector } from "../../store/reducers";
//import DatePicker from "react-datepicker";

class CreateCoupon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      _id: null,
      coupon: {
        code: "",
        type: "",
        amount: 0,
        usageLimit: "",
        expiry: "",
        owner: this.props.auth.user
        //startDate: new Date()
      }
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { state } = this.props.location;
      const index = this.props.coupon.coupons.find(e => e._id === state);
      const { _id, code, type, amount, usageLimit, expiry } = index;
      const { coupon } = { ...this.state };
      coupon.code = code;
      coupon.type = type;
      coupon.amount = amount;
      coupon.usageLimit = usageLimit;
      coupon.expiry = expiry;
      this.setState({
        _id,
        isEditing: true,
        coupon
      });
    }
  }

  validateProperty = ({ code, value }) => {
    const obj = { [code]: value };
    const schema = { [code]: couponSchema[code] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.coupon, couponSchema, options);
    if (!error) return {};
    const errors = {};
    error.details.map(e => {
      errors[e.path[0]] = e.message;
    });
    return errors;
  };
  handleInputChange = ({ currentTarget: input }) => {
    let coupon = { ...this.state.coupon };
    coupon[input.name] = input.value;
    this.setState({ coupon });
  };

  handleCouponSubmit = () => {
    const { token } = this.props.auth;
    const { coupon } = this.state;
    this.props.addCoupon(coupon, token);
  };

  // Handle Update....
  handleUpdate = () => {
    const { token } = this.props.auth;
    const { coupon, _id } = this.state;
    this.props.updateCoupon(_id, coupon, token);
  };
  //Date Change

  formatDate = date => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  render() {
    const { errors } = this.state;
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
                    <p> Add Coupon</p>
                  </div>
                  <Form role="form" encType="multipart/file-data">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Code"
                          name="code"
                          type="text"
                          value={this.state.coupon.code}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors && <Alert color="danger">{errors.name}</Alert>}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Type"
                          name="type"
                          type="text"
                          value={this.state.coupon.type}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors && <Alert color="danger"></Alert>}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Amount"
                          name="amount"
                          type="number"
                          value={this.state.coupon.amount}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors && <Alert color="danger">{errors}</Alert>}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Usage Limit"
                          name="usageLimit"
                          type="Text"
                          value={this.state.coupon.usageLimit}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors && <Alert color="danger">{errors}</Alert>}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        {this.state.isEditing ? (
                          <Input
                            name="expiry"
                            type="Date"
                            value={this.formatDate(this.state.coupon.expiry)}
                            onChange={this.handleInputChange}
                          />
                        ) : (
                          <Input
                            name="expiry"
                            type="Date"
                            value={this.state.coupon.expiry}
                            onChange={this.handleInputChange}
                          />
                        )}
                      </InputGroup>
                      {errors && <Alert color="danger">{errors}</Alert>}
                    </FormGroup>

                    <div className="text-center">
                      {this.state.isEditing ? (
                        <Button
                          className="my-4"
                          onClick={this.handleUpdate}
                          color="success"
                          type="button"
                        >
                          Update
                        </Button>
                      ) : (
                        <Button
                          className="my-4"
                          onClick={this.handleCouponSubmit}
                          color="primary"
                          type="button"
                        >
                          Add
                        </Button>
                      )}
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
    auth: authSelector(state),
    coupon: state.coupon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoupons: () => dispatch(couponActions.getCoupons()),
    addCoupon: (coupon, token) =>
      dispatch(couponActions.addCoupon(coupon, token)),
    updateCoupon: (_id, coupon, token) =>
      dispatch(couponActions.updateCoupon(_id, coupon, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCoupon);
