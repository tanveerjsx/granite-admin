import React, { Component } from 'react';
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"

class OrderList extends Component {

  convertDate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };
  render() { 
    const {orders}=this.props
    return ( 

                  <tbody>
                    {orders &&
                      orders.map(order => {
                        return (
                          <tr key={order._id}>
                            {/* <td>
                              <FaEllipsisH
                                style={{ size: "20px", color: "green" }}
                              />
                            </td> */}
                            <td>
                              <span
                                style={{ color: "#8e2b14", fontSize: "16px" }}
                              >
                                {order.order.user.firstName}
                                <br />
                                {order.order.user.lastName}
                              </span>
                              {/* {order.order.user.firstName}
                              <br />
                              {order.order.user.lastName} */}
                            </td>
                            <td>
                              {/* {order.quantity} item */}
                              <td>
                                <span
                                  style={{ color: "#fb6340", fontSize: "14px" }}
                                >
                                  <b> {order.quantity} item </b>
                                  <br />
                                </span>
                                1xBluePearl
                              </td>
                            </td>

                            <td>
                              {order.order.user.firstName},
                              {order.order.user.lastName} <br />
                              {order.order.bill.streetAddress},
                              {order.order.bill.city}, <br />
                              {order.order.bill.state},
                              {order.order.bill.postCode}
                              <br />
                              {order.order.bill.country}
                            </td>
                            <td>
                              {order.order.user.firstName},
                              {order.order.user.lastName} <br />
                              {order.order.bill.streetAddress},
                              {order.order.bill.city}, <br />
                              {order.order.bill.state},
                              {order.order.bill.postCode}
                              <br />
                              {order.order.bill.country}
                            </td>
                            <td>
                              {/* ${order.order.total} */}
                              <span
                                style={{
                                  color: "#fb6340",
                                  fontSize: "15px"
                                }}
                              >
                                <b> ${order.order.total}</b> <br />
                              </span>
                              Via PayPal
                            </td>
                            <td>N/A</td>
                            <td>{this.convertDate(order.order.date)}</td>
                            {/* <td>{order.stock}</td> */}

                            <td className="text-right">
                              {/* <UncontrolledDropdown>
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
                                      onClick={() => this.handleEdit()}
                                    >
                                      Edit
                                    </DropdownItem>
                                  )}
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() => this.handleDelete()}
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
                              </UncontrolledDropdown> */}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>

     );
  }
}
 
export default LoaderHOC('orders')(OrderList);