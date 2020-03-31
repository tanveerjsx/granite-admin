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
  Alert
} from "reactstrap";
// core components
import Header from "../../components/Headers/DefaultHeader";
import { connect } from "react-redux";
import * as categoryActions from "../../store/actions/categoryActions";
import { categorySchema } from "./../../Utils/Schemas/category";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: {
        name: ""
      },
      errors: {},
      isEditing: false,
      _id: null,
      isError: false,
      errorMessage: ""
    };
  }
  componentDidMount() {
    if (this.props.location.state) {
      const { state } = this.props.location;
      const index = this.props.category.categories.find(e => e._id === state);
      const { name, _id } = index;
      let category = { ...this.state.category };
      category.name = name;
      this.setState({
        _id,
        isEditing: true,
        category
      });
    }
  }
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: categorySchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleInputChange = ({ currentTarget: input }) => {
    const { errors } = { ...this.state };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let category = { ...this.state.category };
    category[input.name] = input.value;
    this.setState({ category, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      this.state.category,
      categorySchema,
      options
    );
    if (!error) return {};
    const errors = {};
    error.details.map(e => {
      errors[e.path[0]] = e.message;
    });
    return errors;
  };

  handleSubmit = () => {
    const errors = this.validate();
    if (errors.name) {
      this.setState({ errors: errors || {} });
      return;
    }
    const { token } = this.props.auth;
    const { category } = this.state;
    const { user } = this.props.auth;
    this.props.addCategory(category, user, token);
  };

  handleUpdate = () => {
    const errors = this.validate();
    if (errors.name) {
      this.setState({ errors: errors || {} });
      return;
    }
    const { token } = this.props.auth;
    const { category } = this.state;
    const { _id } = this.state;
    this.props.updateCategory(_id, category, token);
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
                    <p>Add a category</p>
                  </div>
                  <Form role="form">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Name"
                          value={this.state.category.name}
                          name="name"
                          type="text"
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.name && (
                        <Alert color="danger">{errors.name}</Alert>
                      )}
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
                          onClick={this.handleSubmit}
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
    auth: state.auth,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (category, user, token) =>
      dispatch(categoryActions.addCategory(category, user, token)),
    updateCategory: (_id, category, token) =>
      dispatch(categoryActions.updateCategory(_id, category, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
