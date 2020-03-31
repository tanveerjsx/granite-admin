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
import * as userActions from "./../../store/actions/userActions";
import "../User/User.css";
import UserList from "./UserList"
// import AddProduct from "./CreateProduct";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searching: false
    };
  }
  componentDidMount() {
    const { role } = this.props.auth;
    if (role === "admin") {
      // const { user } = this.props.auth;
      this.props.getUsers();
    }
    this.setState({ users: this.props.user.users });
    console.log(this.props.user.users);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.users !== prevState.users && !prevState.searching) {
      return { users: nextProps.user.users };
    } else return null;
  }
  nameSearch = ({ target: input }) => {
    const { users } = this.props.user;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filter = users.filter(user => {
        return user.email.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({ users: filter, searching: true });
    } else {
      this.setState({ users: this.props.user.users, searching: false });
    }
  };
  activeVendor = id => {
    const { token } = this.props.auth;
    this.props.activeVendor(id, token);
  };
  render() {
    //const { users } = this.props.user;
    const { users } = this.state;
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
                  <h3 className="mb-0">Users</h3>
                </CardHeader>
                <div className="HeaderWrapper">
                  <SearchField onChange={this.nameSearch} />
                </div>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">EMAIL</th>
                      <th scope="col">ORDERS</th>
                      <th scope="col">MONEY SPENT</th>
                      <th scope="col">LAST ORDER</th>
                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                 <UserList
                 users={users}
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
    product: state.product,
    category: state.category,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(userActions.getUsers()),
    activeVendor: (id, token) => dispatch(userActions.activeVendor(id, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
