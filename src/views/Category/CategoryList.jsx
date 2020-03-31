import React, { Component } from 'react'; 
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"


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
class CategoryList extends Component {
  render() { 
    const {categories,handleEdit,handleDelete}=this.props
    return ( 

 <tbody className="TableData">
                    {categories &&
                      categories.map(category => {
                        return (
                          <tr key={category._id}>
                            <td>{category.name}</td>
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
                                      handleEdit(category._id)
                                    }
                                  >
                                    Edit
                                  </DropdownItem>
                                  <DropdownItem
                                    href="#pablo"
                                    onClick={() =>
                                      handleDelete(category._id)
                                    }
                                  >
                                    Delete
                                  </DropdownItem>
                                  {/* <DropdownItem
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                  >
                                    Details
                                  </DropdownItem> */}
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
 
export default LoaderHOC('categories')(CategoryList);