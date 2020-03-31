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
import * as articleAction from "./../../store/actions/articleActions";
import SearchField from "./../../components/SearchFields";
import SelectorFilter from "./../../components/SearchFields/Selector";
import SelectorField from "./../../components/SearchFields/StoreSelector";
import * as Const from "./../../Utils";
import { FaEye } from "react-icons/fa";
import { TiImage } from "react-icons/ti";
import Modal from "../../components/Modal/ArticleModal";
import ArticleList from "./ArticleList"
//import { articles } from "../../store/services/article.js";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      stores: [],
      modalIsOpen: false,
      article: {},
      imageModal: "",
      searching: false
    };
  }
  componentDidMount() {
    const { role } = this.props.auth;
    if (role === "vendor") {
      const { user } = this.props.auth;
      this.props.getMyArticle(user);
    } else {
      this.props.getArticle();
    }
    this.setState({ articles: this.props.article.articles });
    this.handleStoreNames();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.article.articles !== prevState.articles &&
      !prevState.searching
    ) {
      return { articles: nextProps.article.articles };
    } else return null;
  }

  handleStoreNames = () => {
    const { articles } = this.props.article;
    const filterStores = [];
    articles.map(e => (e.owner.storeName ? filterStores.push(e.owner) : null));
    const stores = Array.from(new Set(filterStores.map(a => a._id))).map(id => {
      return filterStores.find(a => a._id === id);
    });
    this.setState({ stores });
  };

  openModal = article => {
    const imageModal = article.articlePic.split("public/").pop();
    this.setState({ modalIsOpen: true, article, imageModal });
    //const { token } = this.props.auth;
    // this.props.addView(article._id, token);
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDelete = id => {
    const { token } = this.props.auth;
    this.props.deleteArticle(id, token);
    this.setState({ modalIsOpen: false });
  };

  addView = id => {
    const { token } = this.props.auth;
    this.props.addView(id, token);
  };
 
  publishArticle = id => {
    const { token } = this.props.auth;
    this.props.publishArticle(id, token);
  };

  nameSearch = ({ target: input }) => {
    const { articles } = this.props.article;
    if (input.value && input.value !== "") {
      let searchText = input.value.toLowerCase();
      const filter = articles.filter(article => {
        return article.name.toLowerCase().indexOf(searchText) >= 0;
      });
      this.setState({ articles: filter, searching: true });
    } else {
      this.setState({
        articles: this.props.article.articles,
        searching: false
      });
    }
  };
  storeSelect = ({ target: input }) => {
    const { articles } = this.props.article;
    if (input.value && input.value !== "") {
      const filter = articles.filter(e => e.owner._id === input.value);
      this.setState({ articles: filter, searching: true });
    } else {
      this.setState({
        articles: this.props.article.articles,
        searching: false
      });
    }
  };
  filterSelect = ({ target: input }) => {
    const { articles } = this.props.article;
    if (input.value === "publish") {
      const filter = articles.filter(e => e.isPublished);
      this.setState({ articles: filter, searching: true });
    } else if (input.value === "unpublish") {
      const filter = articles.filter(e => !e.isPublished);
      this.setState({ articles: filter, searching: true });
    } else {
      this.setState({
        articles: this.props.article.articles,
        searching: false
      });
    }
  };
  render() {
    //const { articles } = this.props.article;
    const { articles, stores } = this.state;
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
                  <h3 className="mb-0">Articles</h3>
                </CardHeader>
                <div className="HeaderWrapper">
                  <SearchField onChange={this.nameSearch} />
                  <SelectorFilter
                    data={Const.articleSelector}
                    placeholder="Filter data"
                    changeSelect={this.filterSelect}
                  />
                  {role === "admin" && (
                    <SelectorField
                      data={stores}
                      placeholder="Select Store"
                      changeSelect={this.storeSelect}
                    />
                  )}
                </div>

                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">
                        <TiImage size={"20px"} />
                      </th>
                      <th scope="col">NAME</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">
                        <FaEye size={"20px"} />
                      </th>
                      <th scope="col">DATE</th>
                      <th scope="col">Store Name</th>
                      <th></th>

                      <th scope="col">ACTIONS</th>
                    </tr>
                  </thead>
                    <ArticleList
                    articles={articles}
                    publishArticle={this.publishArticle}
                    openModal={this.openModal}
                    handleDelete={this.handleDelete}
                    />
                  {/* <tbody>
                    {articles &&
                      articles.map(article => {
                        return (
                          <tr key={article._id}>
                            <td>
                              <img
                                src={`${
                                  Const.base_url
                                }/${article.articlePic.split("public/").pop()}`}
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
                            <td>{article.name}</td>
                            <td>
                              {article.isPublished ? (
                                <span
                                  className="badge badge-success"
                                  style={{ fontSize: "14px" }}
                                >
                                  Published
                                </span>
                              ) : (
                                <span
                                  className="badge badge-warning"
                                  style={{ fontSize: "14px" }}
                                >
                                  Pending
                                </span>
                              )}
                            </td>
                            <td> {article.views}</td>
                            <td>{this.convertDate(article.date)}</td>
                            <td>{article.owner.storeName}</td>
                            <td>
                              {" "}
                              {article.isPublished ? (
                                <Button
                                  onClick={() =>
                                    this.publishArticle(article._id)
                                  }
                                >
                                  Unpublish
                                </Button>
                              ) : (
                                <Button
                                  onClick={() =>
                                    this.publishArticle(article._id)
                                  }
                                >
                                  Publish
                                </Button>
                              )}
                            </td>
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
                                    onClick={() =>
                                      this.handleDelete(article._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() => this.openModal(article)}
                                  >
                                    Details
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
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
              <Modal
                modalIsOpen={this.state.modalIsOpen}
                closeModal={this.closeModal}
                image={this.state.imageModal}
                article={this.state.article}
                handleDelete={this.handleDelete}
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
    article: state.article
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArticle: (id, token) =>
      dispatch(articleAction.deleteArticle(id, token)),
    publishArticle: (id, token) =>
      dispatch(articleAction.publishArticle(id, token)),
    getArticle: () => dispatch(articleAction.getArticle()),
    addView: (id, token) => dispatch(articleAction.addView(id, token)),
    getMyArticle: user => dispatch(articleAction.getMyArticle(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
