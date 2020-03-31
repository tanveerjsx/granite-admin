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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import * as authActions from "./../../store/actions/authActions";
import { loginSchema } from "./../../Utils/Schemas/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        email: "",
        password: ""
      },
      errors: {},
      remember: false
    };
  }
  componentDidMount = () => {
    const { token, role } = this.props.auth;
    if (token) {
      this.props.history.push(`/${role}/index`);
    }
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: loginSchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleInputChange = ({ currentTarget: input }) => {
    const { errors } = { ...this.state };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, loginSchema, options);
    if (!error) return null;
    const errors = {};
    error.details.map(e => {
      errors[e.path[0]] = e.message;
    });
    return errors;
  };

  handleSubmit = () => {
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const { email, password } = this.state.account;
    this.props.login(email, password);
  };

  render() {
    const { errors } = this.state;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                <small>Sign in with your credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      name="email"
                      type="email"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                  {errors.email && <Alert color="danger">{errors.email}</Alert>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      name="password"
                      type="password"
                      onChange={this.handleInputChange}
                    />
                  </InputGroup>
                  {errors.password && (
                    <Alert color="danger">{errors.password}</Alert>
                  )}
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button
                    className="my-4"
                    onClick={this.handleSubmit}
                    color="primary"
                    type="button"
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Forgot password?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
        </Col>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(authActions.login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
