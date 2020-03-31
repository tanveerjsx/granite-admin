import React, { Component } from 'react';  
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"
import * as Const from "./../../Utils";
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

class ArticleList extends Component {
   convertDate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };
  render() { 
    const {articles,publishArticle,openModal,handleDelete}=this.props
    return ( 
                <tbody>
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
                                    publishArticle(article._id)
                                  }
                                >
                                  Unpublish
                                </Button>
                              ) : (
                                <Button
                                  onClick={() =>
                                    publishArticle(article._id)
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
                                      handleDelete(article._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() => openModal(article)}
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

     );
  }
}
 
export default LoaderHOC('articles')(ArticleList);