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

// reactstrap components
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
import Header from "../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";

import * as vendorActions from "../../store/actions/userActions";

class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getVendor();
  }

  render() {
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
                  <h3 className="mb-0">Vendors</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Store Name</th>
                      <th scope="col">Vendor Name</th>
                      <th scope="col">Ratings</th>
                      <th scope="col">Total Products</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.user.vendors &&
                      this.props.user.vendors.map(vendor => {
                        return (
                          <tr key={vendor._id}>
                            {vendor.storeName ? (
                              <td>{vendor.storeName}</td>
                            ) : (
                              <td></td>
                            )}
                            <td>{`${vendor.firstName} ${vendor.lastName}`}</td>
                            <td>
                              <StarRatings
                                rating={vendor.rating}
                                starRatedColor="red"
                                name="rating"
                                starDimension="20px"
                                starSpacing="5px"
                              />
                            </td>
                            {vendor.products ? (
                              <td>{vendor.products.length}</td>
                            ) : (
                              <td>0</td>
                            )}
                            <td className="text-right">
                              <UncontrolledDropdown>
                                <DropdownToggle
                                  className="btn-icon-only text-light"
                                  href="#pablo"
                                  role="button"
                                  size="sm"
                                  color=""
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="fas fa-ellipsis-v" />
                                </DropdownToggle>
                                <DropdownMenu
                                  className="dropdown-menu-arrow"
                                  right
                                >
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() =>
                                      this.handleDelete(vendor._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Details
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
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
    product: state.product,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVendor: () => dispatch(vendorActions.getVendor())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
