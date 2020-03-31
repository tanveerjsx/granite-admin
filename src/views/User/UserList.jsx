import React, { Component } from 'react';
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"
import {Button} from "reactstrap";

class UserList extends Component {
  render() { 
    const {users,activeVendor}=this.props
    return ( 
       <tbody>
                    {users &&
                      users.map(user => {
                        return (
                          <tr key={user._id}>
                            <td>{user.email}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              {user.activate ? (
                                <Button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => activeVendor(user._id)}
                                >
                                  DeActive
                                </Button>
                              ) : (
                                <Button
                                  className="btn btn-sm btn-success"
                                  onClick={() => activeVendor(user._id)}
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
 
export default LoaderHOC('users')(UserList);