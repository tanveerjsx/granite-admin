import React, { Component } from 'react';
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"
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
class CouponList extends Component {
    convertdate = dt => {
    const date = new Date(dt);
    return date.toDateString();
  };
  render() { 
    const {coupons,handleEdit,handleDelete}=this.props
    return (  <tbody>
                    {coupons &&
                      coupons.map(coupon => {
                        return (
                          <tr key={coupon._id}>
                            <td>{coupon.code}</td>
                            <td>{coupon.type}</td>
                            <td>
                              {/* {coupon.amount} */}
                              <span
                                style={{ color: "#fb6340", fontSize: "15px" }}
                              >
                                <b> ${coupon.amount}</b>
                              </span>
                            </td>
                            <td>{coupon.owner.storeName}</td>
                            <td>{coupon.usageLimit}</td>
                            <td>{this.convertdate(coupon.expiry)}</td>

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
                                    onClick={() => handleEdit(coupon._id)}
                                  >
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() =>
                                      handleDelete(coupon._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody> );
  }
}
 
export default LoaderHOC('coupons')(CouponList);