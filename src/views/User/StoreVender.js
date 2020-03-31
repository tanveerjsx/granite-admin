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
import Header from "../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import SearchField from "./../../components/SearchFields";
import { GoLocation } from "react-icons/go";
import { IoMdCall, IoIosAt } from "react-icons/io";
import VendorList from "./VendorList"
import Modal from "../../components/Modal/ProductModal";

class StoreVendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vendors: [],
      searching: false
    };
  }
  componentDidMount() {
    this.props.getVendor();
    this.setState({ vendors: this.props.user.vendors });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.vendors !== prevState.vendors && !prevState.searching) {
      return { vendors: nextProps.user.vendors };
    } else return null;
  }
  nameSearch = ({ target: input }) => {
    const { vendors } = this.props.user;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filter = vendors.filter(user => {
        return (
          user.firstName.toLowerCase().indexOf(searchText) >= 0 ||
          user.lastName.toLowerCase().indexOf(searchText) >= 0
        );
      });
      this.setState({ vendors: filter, searching: true });
    } else {
      this.setState({ vendors: this.props.user.vendors, searching: false });
    }
  };
  activeVendor = id => {
    const { token } = this.props.auth;
    this.props.activeVendor(id, token);
  };

  render() {
    // const { vendors } = this.props.user;
    const { vendors } = this.state;
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
                  <h3 className="mb-0">Store Vendor</h3>
                </CardHeader>
                <div className="HeaderWrapper">
                  <SearchField onChange={this.nameSearch} />
                </div>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">VERIFICATION PROFILE</th>
                      <th scope="col">STORE</th>
                      <th scope="col">GROSS SALES</th>
                      <th scope="col">EARNINGS</th>
                      <th scope="col">WITHDRAWAL</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                 <VendorList
                 vendors={vendors}
                 activeVendor={this.activeVendor}
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
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVendor: () => dispatch(userActions.getVendor()),
    activeVendor: (id, token) => dispatch(userActions.activeVendor(id, token))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StoreVendor);
