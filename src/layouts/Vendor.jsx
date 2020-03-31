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
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
import { connect } from "react-redux";
// core components
import VendorNavbar from "../components/Navbars/VendorNavbar.jsx";
import VendorFooter from "../components/Footers/VendorFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import * as categoryActions from "../store/actions/categoryActions";
import Setting from "../views/Setting/Settings";
import CreateProduct from "../views/Product/CreateProduct";
import CreateCoupon from "../views/Coupon/CreateCoupon.js";

import routes from "../Utils/vendorRoutes";

class Vendor extends React.Component {
  componentDidMount() {}
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/vendor") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/vendor/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <VendorNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Route path="/vendor/Setting" component={Setting} />
            <Route path="/vendor/add-product" component={CreateProduct} />
            <Route path="/vendor/createcoupons" component={CreateCoupon} />
          </Switch>
          <Container fluid>
            <VendorFooter />
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    category: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(categoryActions.getCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
