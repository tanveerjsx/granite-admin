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
  Row,
  Button,
  Col
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import SearchField from "./../../components/SearchFields";
import SelectorField from "./../../components/SearchFields/Selector";
import ShowEntries from "../../components/SearchFields/ShowEntries";
import * as productActions from "./../../store/actions/productActions";
import * as Const from "./../../Utils";
import { FaEye } from "react-icons/fa";
import { TiImage } from "react-icons/ti";
import Modal from "../../components/Modal/ProductModal";
import ProductList from "./ProductList"
import "../Product/Products.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      modalIsOpen: false,
      product: {},
      imageModal: {},
      searching: false
    };
  }
  componentDidMount() {
    const { role } = this.props.auth;
    if (role === "vendor") {
      const { user } = this.props.auth;
      this.props.getMyProducts(user);
    } else {
      this.props.getProducts();
    }
    this.setState({ products: this.props.product.products });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.product.products !== prevState.products &&
      !prevState.searching
    ) {
      return { products: nextProps.product.products };
    } else return null;
  }

  openModal = product => {
    const { _id } = product;
    const imageModal = product.productPic[0].img.split("public/").pop();
    this.setState({ modalIsOpen: true, product, imageModal });
    const { token } = this.props.auth;
    this.props.addView(_id, token);
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDelete = id => {
    const { token } = this.props.auth;
    this.setState({ modalIsOpen: false });
    this.props.deleteProduct(id, token);
  };

  handleAddProduct = () => {
    const { role } = this.props.auth;
    if (role === "vendor") {
      this.props.history.push("/vendor/add-product");
    } else {
      this.props.history.push("/admin/add-product");
    }
  };

  nameSearch = ({ target: input }) => {
    const { products } = this.props.product;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filterProducts = products.filter(product => {
        return product.name.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({ products: filterProducts, searching: true });
    } else {
      this.setState({
        products: this.props.product.products,
        searching: false
      });
    }
  };
  categorySelect = ({ target: input }) => {
    const { products } = this.props.product;
    if (input.value && input.value !== "") {
      const filter = products.filter(e => {
        return e.category._id === input.value;
      });
      this.setState({ products: filter, searching: true });
    } else {
      this.setState({
        products: this.props.product.products,
        searching: false
      });
    }
  };
  colorSelect = ({ target: input }) => {
    const { products } = this.props.product;
    if (input.value && input.value !== "") {
      const filter = products.filter(e => e.color === input.value);
      this.setState({ products: filter, searching: true });
    } else {
      this.setState({
        products: this.props.product.products,
        searching: false
      });
    }
  };
  changeSearch = ({ target: input }) => {
    // const products = this.props.product.products;
    // if (input.value && input.value !== "") {
    //   let searchText = input.value.toLowerCase();
    //   const filterProducts = products.filter(el => {
    //     return (
    //       el.name.toLowerCase().indexOf(searchText) >= 0 ||
    //       // el.category.indexOf(searchText) >= 0 ||
    //       el.color.toLowerCase().indexOf(searchText) >= 0
    //     );
    //   });
    //   this.setState({ products: filterProducts });
    // } else {
    //   this.setState({ products: this.props.product.products });
    // }
  };
  handleEdit = productId => {
    if (this.props.auth.role === "vendor") {
      this.props.history.push("/vendor/add-product", productId);
    } else if (this.props.auth.role === "admin") {
      this.props.history.push("/admin/add-product", productId);
    }
  };
  convertDate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };
  render() {
    const { products } = this.state;
    console.log(products)
    const { role } = this.props.auth;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Products</h3>
                </CardHeader>
                {/* <div className="HeaderWrapper">
                  {/* <ShowEntries /> 
                  <SearchField onChange={this.nameSearch} />
                  <SelectorField
                    data={this.props.category.categories}
                    placeholder="Select Category"
                    changeSelect={this.categorySelect}
                  />
                  <SelectorField
                    data={Const.colors}
                    placeholder="Select Color"
                    changeSelect={this.colorSelect}
                  />

                  <Button onClick={this.handleAddProduct} type="button">
                    Add Product
                  </Button>
                </div> */}
                <div className="HeaderWrapper">
                  <ShowEntries />
                  <SearchField onChange={this.nameSearch} />
                  <SelectorField
                    data={this.props.category.categories}
                    placeholder="Select Category"
                    changeSelect={this.categorySelect}
                  />
                  <SelectorField
                    data={Const.colors}
                    placeholder="Select Color"
                    changeSelect={this.colorSelect}
                  />

                  <Button onClick={this.handleAddProduct} type="button">
                    Add Product
                  </Button>
                </div>

                <Table
                  className="align-items-center mainTable table-flush table table-sm"
                  responsive
                >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">
                        {" "}
                        <TiImage size={"20px"} />
                      </th>
                      <th scope="col">NAME</th>
                      <th scope="col">SKU</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">STOCK</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">TAXONOMIES</th>
                      <th scope="col">
                        <FaEye size={"20px"} />
                      </th>
                      <th scope="col">DATE</th>
                      <th scope="col">STORE</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <ProductList
                  products={products}
                  role={role}
                  openModal={this.openModal}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                  />
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
              <Modal
                modalIsOpen={this.state.modalIsOpen}
                closeModal={this.closeModal}
                product={this.state.product}
                image={this.state.imageModal}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
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
    addView: (id, token) => dispatch(productActions.addView(id, token)),
    getMyProducts: user => dispatch(productActions.getMyProducts(user)),
    deleteProduct: (id, token) =>
      dispatch(productActions.deleteProduct(id, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
