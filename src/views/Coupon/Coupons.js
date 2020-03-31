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
  Button
} from "reactstrap";
// core components
import Header from "./../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import * as couponActions from "./../../store/actions/couponAction";
import SelectorField from "./../../components/SearchFields/StoreSelector";
import "../Coupon/Coupon.css";
import CouponList from "./CouponList"

class Coupons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coupons: [],
      stores: [],
      searching: false
    };
  }
  componentDidMount() {
    const { role } = this.props.auth;
    if (role === "vendor") {
      const { user } = this.props.auth;
      this.props.getMyCoupons(user);
    } else {
      this.props.getCoupons();
    }
    this.setState({ coupons: this.props.coupon.coupons });
    this.handleStoreNames();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.coupon.coupons !== prevState.coupons &&
      !prevState.searching
    ) {
      return { coupons: nextProps.coupon.coupons };
    } else return null;
  }

  handleStoreNames = () => {
    const { coupons } = this.props.coupon;
    const filterStores = [];
    coupons.map(e => (e.owner.storeName ? filterStores.push(e.owner) : null));
    const stores = Array.from(new Set(filterStores.map(a => a._id))).map(id => {
      return filterStores.find(a => a._id === id);
    });
    this.setState({ stores });
  };

  handleDelete = id => {
    const { token } = this.props.auth;
    this.props.deleteCoupons(id, token);
  };

  handleEdit = couponId => {
    if (this.props.auth.role === "vendor") {
      this.props.history.push("/vendor/createcoupons", couponId);
    } else if (this.props.auth.role === "admin") {
      this.props.history.push("/admin/createcoupons", couponId);
    }
  };

  handleAddCoupon = () => {
    const { role } = this.props.auth;
    if (role === "vendor") {
      this.props.history.push("/vendor/createcoupons");
    } else {
      this.props.history.push("/admin/createcoupons");
    }
  };

  storeSelect = ({ target: input }) => {
    const { coupons } = this.props.coupon;
    if (input.value && input.value !== "") {
      const filter = coupons.filter(e => e.owner._id === input.value);
      this.setState({ coupons: filter, searching: true });
    } else {
      this.setState({ coupons: this.props.coupon.coupons, searching: false });
    }
  };



  render() {
    // const { coupons } = this.props.coupon;
    const { coupons, stores } = this.state;
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
                  <h3 className="mb-0">Coupons Listing</h3>
                </CardHeader>
                {/* <Row> */}
                <div className="HeaderWrapper">
                  {role === "admin" && (
                    <SelectorField
                      data={stores}
                      placeholder="Select Store"
                      changeSelect={this.storeSelect}
                    />
                  )}
                  <Button onClick={this.handleAddCoupon} type="button">
                    Add Coupon
                  </Button>
                </div>
                {/* </Row> */}

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">CODE</th>
                      <th scope="col">TYPE</th>
                      <th scope="col">AMOUNT</th>
                      <th scope="col">STORE</th>
                      <th scope="col">USAGE LIMIT</th>
                      <th scope="col">EXPIRY DATE</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                  <CouponList
                  coupons={coupons}
                  handleEdit={this.handleEdit}
                  handleDelete={this.handleDelete}
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
    coupon: state.coupon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCoupons: () => dispatch(couponActions.getCoupons()),
    getMyCoupons: id => dispatch(couponActions.getMyCoupons(id)),
    deleteCoupons: (id, token) =>
      dispatch(couponActions.deleteCoupons(id, token))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Coupons);
