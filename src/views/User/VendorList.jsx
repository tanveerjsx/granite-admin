import React, { Component } from 'react';
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"
import { IoMdCall, IoIosAt } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import {Button} from "reactstrap";
class VendorList extends Component {
  render() { 
    const {vendors,activeVendor}=this.props
    return (  
 <tbody>
                    {vendors &&
                      vendors.map(vendorStore => {
                        return (
                          <tr key={vendorStore._id}>
                            <td>
                              <IoIosAt
                                style={{ size: "40px", color: "#5DADE2" }}
                              />
                              {vendorStore.email}
                              <span>
                                <br />
                                <IoMdCall
                                  style={{ size: "40px", color: "#5DADE2" }}
                                />
                                {vendorStore.contact}
                                <br />
                                <GoLocation
                                  style={{ size: "40px", color: "#5DADE2" }}
                                />
                                {vendorStore.storeAddress}
                              </span>
                            </td>
                            <td>{vendorStore.storeName}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              {vendorStore.activate ? (
                                <Button
                                  className="btn btn-sm btn-danger"
                                  onClick={() =>
                                    activeVendor(vendorStore._id)
                                  }
                                >
                                  DeActive
                                </Button>
                              ) : (
                                <Button
                                  className="btn btn-sm btn-success"
                                  onClick={() =>
                                    activeVendor(vendorStore._id)
                                  }
                                >
                                  Active
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>


    );
  }
}
 
export default LoaderHOC('vendors')(VendorList);