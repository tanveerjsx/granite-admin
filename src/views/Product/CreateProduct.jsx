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
import * as productActions from "../../store/actions/productActions";
import * as categoryActions from "../../store/actions/categoryActions";
import * as Const from "./../../Utils";
import { productSchema } from "./../../Utils/Schemas/product";
import { authSelector } from "./../../store/reducers";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      _id: null,
      product: {
        name: "",
        price: null,
        finalPrice: null,
        stock: null,
        description: "",
        sku: "",
        category: "",
        color: "",
        productPic: [],
        owner: this.props.auth.user
      },
      errors: {}
    };
  }
  componentDidMount() {
    this.props.getCategories();
    if (this.props.location.state) {
      const { state } = this.props.location;
      const index = this.props.product.products.find(e => e._id === state);
      const {
        name,
        _id,
        price,
        finalPrice,
        stock,
        description,
        productPic,
        owner,
        category,
        sku,
        color
      } = index;
      let product = { ...this.state.product };
      product.name = name;
      product.price = price;
      product.finalPrice = finalPrice;
      product.stock = stock;
      product.description = description;
      product.productPic = productPic;
      product.owner = owner;
      product.category = category._id;
      product.sku = sku;
      product.color = color;
      this.setState({
        _id,
        isEditing: true,
        product
      });
    }
    this.handleCategory();
  }
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: productSchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleInputChange = ({ currentTarget: input }) => {
    const { errors } = this.state;
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    let product = { ...this.state.product };
    product[input.name] = input.value;
    this.setState({ product });
  };
  onImageChange = event => {
    let product = { ...this.state.product };
    const productPic = event.target.files[0];
    product.productPic = productPic;
    this.setState({ product });
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.product, productSchema, options);
    if (!error) return null;
    const errors = {};
    error.details.map(e => {
      errors[e.path[0]] = e.message;
    });
    return errors;
  };
  handleSubmit = () => {
    //const errors = this.validate();
    // this.setState({ errors: errors || {} });
    //if (errors) return;
    const { token } = this.props.auth;
    const { product } = this.state;
    let productData = new FormData();
    productData.append("productPic", product.productPic);
    productData.append("name", product.name);
    productData.append("price", product.price);
    productData.append("finalPrice", product.finalPrice);
    productData.append("stock", product.stock);
    productData.append("description", product.description);
    productData.append("owner", product.owner);
    productData.append("sku", product.sku);
    productData.append("category", product.category);
    productData.append("color", product.color);
    this.props.addProduct(productData, token);
  };

  handleUpdate = () => {
    const { token } = this.props.auth;
    const { product } = this.state;
    const { _id } = this.state;
    this.props.updateProduct(_id, product, token);
  };

  handleColor = colour => {
    const { isEditing } = this.state;
    const { color } = this.state.product;
    const index = Const.colors.find(e => e.name === color) || {};
    if (isEditing && index._id === colour._id) {
      return (
        <option key={index._id} selected="selected" value={index.name}>
          {index.name}
        </option>
      );
    } else {
      return (
        <option key={colour._id} value={colour.name}>
          {colour.name}
        </option>
      );
    }
  };

  handleCategory = categoryParam => {
    const { isEditing } = this.state;
    const { category } = this.state.product;
    if (this.props.category.categories) {
      let index =
        this.props.category.categories.find(e => e._id === category) || {};
      if (isEditing && index._id === categoryParam._id) {
        return (
          <option selected="selected" key={index._id} value={index._id}>
            {index.name}
          </option>
        );
      } else if (categoryParam) {
        return (
          <option key={categoryParam._id} value={categoryParam._id}>
            {categoryParam.name}
          </option>
        );
      }
    }
  };

  render() {
    const { errors, isEditing } = this.state;
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
                    <p>Add a product</p>
                  </div>
                  <Form role="form" encType="multipart/file-data">
                    <FormGroup className="mb-3">
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Name"
                          name="name"
                          type="text"
                          value={this.state.product.name}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.name && (
                        <Alert color="danger">{errors.name}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Description"
                          name="description"
                          type="textarea"
                          value={this.state.product.description}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.description && (
                        <Alert color="danger">{errors.description}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Price"
                          name="price"
                          type="number"
                          value={this.state.product.price}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.price && (
                        <Alert color="danger">{errors.price}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Final Price"
                          name="finalPrice"
                          type="number"
                          value={this.state.product.finalPrice}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.finalPrice && (
                        <Alert color="danger">{errors.finalPrice}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="Stock"
                          name="stock"
                          type="number"
                          value={this.state.product.stock}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.stock && (
                        <Alert color="danger">{errors.stock}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder="sku"
                          name="sku"
                          type="text"
                          value={this.state.product.sku}
                          onChange={this.handleInputChange}
                        />
                      </InputGroup>
                      {errors.sku && <Alert color="danger">{errors.sku}</Alert>}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        placeholder="Color"
                        name="color"
                        type="select"
                        onChange={this.handleInputChange}
                      >
                        <option>Select Color</option>
                        {Const.colors &&
                          Const.colors.map(color => this.handleColor(color))}
                      </Input>
                      {errors.color && (
                        <Alert color="danger">{errors.color}</Alert>
                      )}
                    </FormGroup>
                    <FormGroup>
                      <Input
                        placeholder="Category"
                        name="category"
                        type="select"
                        onChange={this.handleInputChange}
                      >
                        <option>Select Category</option>
                        {this.props.category.categories &&
                          this.props.category.categories.map(category =>
                            this.handleCategory(category)
                          )}
                      </Input>
                      {errors.category && (
                        <Alert color="danger">{errors.category}</Alert>
                      )}
                    </FormGroup>
                    {!isEditing && (
                      <FormGroup>
                        <Input
                          type="file"
                          multiple
                          onChange={this.onImageChange}
                          name="productPic"
                          id="productPic"
                        />
                        <FormText color="muted">
                          Please upload image in jpg or png.
                        </FormText>
                        {errors.productPic && (
                          <Alert color="danger">{errors.productPic}</Alert>
                        )}
                      </FormGroup>
                    )}
                    <div className="text-center">
                      {isEditing ? (
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
    auth: authSelector(state),
    product: state.product,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(productActions.getProducts()),
    getCategories: () => dispatch(categoryActions.getCategories()),
    addProduct: (product, token) =>
      dispatch(productActions.addProduct(product, token)),
    updateProduct: (_id, product, token) =>
      dispatch(productActions.updateProduct(_id, product, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
