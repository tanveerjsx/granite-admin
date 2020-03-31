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
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Button,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../components/Headers/DefaultHeader.jsx";
import { connect } from "react-redux";
import * as categoryActions from "../../store/actions/categoryActions";
import SearchField from "../../components/SearchFields";
import "../Category/Category.css";
import CategoryList from "./CategoryList"
//import SearchBar from "./../../components/Searchbars";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searching: false
    };
  }
  componentDidMount = () => {
    this.props.getCategories();
    this.setState({ categories: this.props.category.categories });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.category.categories !== prevState.categories &&
      !prevState.searching
    ) {
      return { categories: nextProps.category.categories };
    } else return null;
  }

  handleDelete = id => {
    const { token } = this.props.auth;
    this.props.deleteCategory(id, token);
  };
  onSearchChange = ({ target: input }) => {
    const { categories } = this.state;
    if (input.value) {
      let searchText = input.value.toLowerCase(),
        filterCategories = categories.filter(el => {
          let searchValue = el.name.toLowerCase();
          return searchValue.indexOf(searchText) !== -1;
        });
      this.setState({ categories: filterCategories, searching: true });
    } else {
      this.setState({
        categories: this.props.category.categories,
        searching: false
      });
    }
  };
  handleEdit = categoryId => {
    this.props.history.push("/admin/add-category", categoryId);
  };

  handleCategory = () => {
    this.props.history.push("/admin/add-category");
  };

  render() {
    const { categories } = this.state;
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
                  <h3 className="mb-0">Categories</h3>
                </CardHeader>
                <div className="HeaderWrapper">
                  <SearchField onChange={this.onSearchChange} />
                  <Button onClick={this.handleCategory} type="button">
                    Add Category
                  </Button>
                </div>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light" className="TableData">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <CategoryList
                  categories={categories}
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
    category: state.category
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(categoryActions.getCategories()),
    deleteCategory: (id, token) => {
      dispatch(categoryActions.deleteCategory(id, token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
