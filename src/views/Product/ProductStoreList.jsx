import React, { Component } from 'react';
import * as Const from "./../../Utils";
import {Button} from "reactstrap";
import {LoaderHOC} from "./../../components/Hoc/LoaderHoc"


class ProductStoreList extends Component {
  render() { 
    const {products,addStore}=this.props
    return ( 
  <tbody>
                    {products &&
                      products.map(store => {
                        return (
                          <tr key={store._id}>
                            <td>
                              <img
                                src={`${
                                  Const.base_url
                                }/${store.productPic[0].img
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
                            <td>{store.name}</td>
                            <td>{store.price}</td>
                            <td>{store.category.name}</td>
                            <td>{store.owner.storeName}</td>
                            <td>
                              {store.isPublish ? (
                                <Button
                                  onClick={() => this.addStore(store._id)}
                                >
                                  Remove from Store
                                </Button>
                              ) : (
                                <Button
                                  onClick={() => this.addStore(store._id)}
                                >
                                  Add to Store
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
 
export default LoaderHOC('products')(ProductStoreList);