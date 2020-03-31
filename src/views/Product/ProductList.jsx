import React, { Component } from 'react';
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
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"
import * as Const from "./../../Utils";

class ProductList extends Component {

  convertDate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };

  render() { 
    const {products,role,openModal,handleDelete,handleEdit}=this.props
    return (
                        <tbody>
        {products &&
                      products.map(product => {
                        return (
                          <tr key={product._id}>
                            <td>
                              <img
                                src={`${
                                  Const.base_url
                                }/${product.productPic[0].img
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
                            <td>{product.name}</td>
                            <td>{product.sku}</td>
                            <td>
                              {product.isPublish ? (
                                <span
                                  class="badge badge-success"
                                  style={{ fontSize: "14px" }}
                                >
                                  {" "}
                                  Published{" "}
                                </span>
                              ) : (
                                <span
                                  class="badge badge-warning"
                                  style={{ fontSize: "14px" }}
                                >
                                  {" "}
                                  Pendding{" "}
                                </span>
                              )}
                            </td>
                            <td>
                              <span style={{ color: "green" }}>
                                In Stock <br />
                              </span>
                              <span style={{ color: "gray" }}>
                                {product.stock}
                              </span>
                              {/* {product.stock} */}
                            </td>
                            <td>
                              <span
                                style={{
                                  textDecoration: "line-through",
                                  color: "#fb6340"
                                }}
                              >
                                ${product.price} <br />
                              </span>
                              <span style={{ color: "green" }}>
                                ${product.finalPrice} <br />
                              </span>
                              {/* {product.price} */}
                            </td>

                            <td>
                              {/* {product.category && product.category.name} */}
                              <span style={{ color: "gray" }}>
                                {" "}
                                categories : <br />
                              </span>
                              <span style={{ color: "green" }}>
                                {product.category && product.category.name}
                              </span>
                            </td>
                            <td>{product.views ? product.views : 0}</td>

                            <td>{this.convertDate(product.createdAt)}</td>
                            <td>{product.owner.storeName}</td>

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
                                  {role === "vendor" && (
                                    <DropdownItem
                                      href="#pablo"
                                      onClick={() =>
                                        handleEdit(product._id)
                                      }
                                    >
                                      Edit
                                    </DropdownItem>
                                  )}
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() =>
                                      handleDelete(product._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() => openModal(product)}
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
 
export default LoaderHOC('products')(ProductList);