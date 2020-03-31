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
// import * as refundActions from "./../../store/actions/refundActions";
import { FaInfoCircle, FaEllipsisH } from "react-icons/fa";
// import Modal from "./../../components/Modal/ProductModal";

class Refund extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Refunds: [],
      modalIsOpen: false,
      product: {},
      imageModal: {}
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    // this.props.getRefund();
  }

  handleDelete = id => {
    const { token } = this.props.auth;
    this.props.deleteProduct(id, token);
    this.setState({ modalIsOpen: false });
  };

  handleEdit = productId => {
    if (this.props.auth.role === "vendor") {
      this.props.history.push("/vendor/add-product", productId);
    } else if (this.props.auth.role === "admin") {
      this.props.history.push("/admin/add-product", productId);
    }
  };

  convertdate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };

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
                  <h3 className="mb-0">Refund</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">
                        <FaEllipsisH color="green" />
                      </th>
                      <th scope="col">REQUEST ID</th>
                      <th scope="col">ORDER ID</th>
                      <th scope="col">AMOUNT</th>
                      <th scope="col">TYPE</th>
                      <th scope="col">REASON</th>
                      <th scope="col">DATE</th>
                      <th scope="col" />
                      <th scope="col" />
                    </tr>
                  </thead>
                  {/* <tbody>
                    {refunds &&
                      refunds.map(refund => {
                        return (
                          <tr key={refund._id}>
                            <td>
                              <FaEllipsisH color="green" />
                            </td>
                            <td>{refund.request}</td>
                            <td>{refund.order}</td>

                            <td>{refund.amount}</td>
                            <td>{refund.type}</td>
                            <td>{refund.reason}</td>
                            <td>{this.convertdate(refund.date)}</td>
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
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Refund);
