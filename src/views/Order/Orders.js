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
  Row
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import ProductSearchField from "./../../components/SearchFields/ProductSearchField";
import * as orderActions from "./../../store/actions/orderActions";
import * as Const from "./../../Utils";
import { FaInfoCircle, FaEllipsisH } from "react-icons/fa";
import Modal from "./../../components/Modal/ProductModal";
import orderReducers from "../../store/reducers/orderReducers.js";
import OrderList from "./OrderList"

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      product: {},
      order: {},
      imageModal: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    const { role } = this.props.auth;
    if (role === "vendor") {
      const { user } = this.props.auth;
      this.props.getMyOrder(user);
    } else {
      this.props.getOrder();
    }
  }
  // componentWillReceiveProps = nextProps => {
  //   const orders = nextProps.order.orders;
  //   this.setState({ orders });
  // };
  openModal = product => {
    const imageModal = product.productPic[0];
    this.setState({ modalIsOpen: true, product, imageModal });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDelete = id => {
    const { token } = this.props.auth;
    this.props.deleteOrder(id, token);
    //this.setState({ modalIsOpen: false });
  };
  nameSearch = ({ target: input }) => {
    const { products } = this.state;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filterProducts = products.filter(product => {
        return product.name.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({ products: filterProducts });
    } else {
      this.setState({ products: this.props.product.products });
    }
  };
  categorySearch = ({ target: input }) => {
    const { products } = this.state;
    if (input.value && input.value !== "") {
      let searchText = input.value;
      const filterProducts = products.filter(product => {
        return product.category.indexOf(searchText) >= 0;
      });
      this.setState({ products: filterProducts });
    } else {
      this.setState({ products: this.props.product.products });
    }
  };
  colorSearch = ({ target: input }) => {
    const { products } = this.state;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filterProducts = products.filter(product => {
        return product.color.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({ products: filterProducts });
    } else {
      this.setState({ products: this.props.product.products });
    }
  };
  changeSearch = ({ target: input }) => {
    const products = this.props.product.products;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filterProducts = products.filter(el => {
        return (
          el.name.toLowerCase().indexOf(searchText) >= 0 ||
          el.category.indexOf(searchText) >= 0 ||
          el.color.toLowerCase().indexOf(searchText) >= 0
        );
      });
      this.setState({ products: filterProducts });
    } else {
      this.setState({ products: this.props.product.products });
    }
  };
  handleEdit = productId => {
    if (this.props.auth.role === "vendor") {
      this.props.history.push("/vendor/add-product", productId);
    } else if (this.props.auth.role === "admin") {
      this.props.history.push("/admin/add-product", productId);
    }
  };



  render() {
    const { orders } = this.props.order;
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
                  <h3 className="mb-0">Orders</h3>
                </CardHeader>
                {/* <ProductSearchField
                  changeSearch={this.changeSearch}
                  Colors={Const.colors}
                  Categories={this.props.category.categories}
                /> */}
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    {/* <tr> */}
                    {/* <th>
                      {" "}
                      <FaEllipsisH style={{ size: "20px", color: "green" }} />
                    </th> */}
                    <th>ORDER</th>
                    <th>PURCHASED</th>
                    <th>BILLING ADDRESS</th>
                    <th>SHIPPING ADDRESS</th>
                    <th>GROSS SALES</th>
                    <th>COMMISSION</th>
                    <th>DATE</th>
                    <th>ACTIONS</th>
                    {/* </tr> */}
                  </thead>
                    <OrderList
                    orders={orders}
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
    order: state.order,
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOrder: () => dispatch(orderActions.getOrder()),
    getMyOrder: user => dispatch(orderActions.getMyOrder(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
