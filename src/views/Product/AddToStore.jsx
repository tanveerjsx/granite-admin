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
import * as productActions from "./../../store/actions/productActions";
import SearchField from "./../../components/SearchFields";
import * as Const from "./../../Utils";
import { TiImage } from "react-icons/ti";
import ProductStoreList from "./ProductStoreList"

class ProductStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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

  addStore = id => {
    const { token } = this.props.auth;
    this.props.addStore(id, token);
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
  render() {
    // const { products } = this.props.product;
    const { products } = this.state;
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
                  <h3 className="mb-0">Add To My Store</h3>
                </CardHeader>
                <div className="HeaderWrapper">
                  <SearchField onChange={this.nameSearch} />
                </div>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">
                        {" "}
                        <TiImage size={"20px"} />
                      </th>
                      <th scope="col">NAME</th>
                      <th scope="col">PRICE</th>
                      <th scope="col">TAXONOMIES</th>
                      <th> store</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <ProductStoreList
                  products={products}
                  addStore={this.addStore}

                  />
                  {/* <tbody>
                    {products &&
                      products.map(store => {
                        return (
                          <tr key={store._id}>
                            <td>
                              <img
                                src={`${
                                  Const.base_url
                                }/${store.productPic[0].img
                                  .split("public/")
                                  .pop()}`}
                                alt=""
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  borderRadius: "4px",
                                  backgroundColor: "#fff",
                                  border: "2px double #eee",
                                  padding: "2px"
                                }}
                              />
                            </td>
                            <td>{store.name}</td>
                            <td>{store.price}</td>
                            <td>{store.category.name}</td>
                            <td>{store.owner.storeName}</td>
                            <td>
                              {store.isPublish ? (
                                <Button
                                  onClick={() => this.addStore(store._id)}
                                >
                                  Remove from Store
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => this.addStore(store._id)}
                                >
                                  Add to Store
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody> */}
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
    product: state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStore: (id, token) => dispatch(productActions.addToStore(id, token)),
    getMyProducts: user => dispatch(productActions.getMyProducts(user)),
    getProducts: () => dispatch(productActions.getProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);
