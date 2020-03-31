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
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import AdminFooter from "../components/Footers/AdminFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

import * as categoryActions from "../store/actions/categoryActions";

import routes from "../routes.js";
import CreateProduct from "../views/Product/CreateProduct.jsx";
import CreateCoupon from "../views/Coupon/CreateCoupon.js";
import CreateCategory from "../views/Category/CreateCategory";
import StoreSetting from "../views/Setting/StoreSetting";
import CustomerSupport from "../views/Setting/CustomerSupport";
import PoliciesSetting from "../views/Setting/Policies";
import PaymentSetting from "../views/Setting/PaymentSetting";

class Admin extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
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
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}

            <Route path="/admin/add-product" component={CreateProduct} />
            <Route path="/admin/createcoupons" component={CreateCoupon} />
            <Route path="/admin/add-category" component={CreateCategory} />
            <Route path="/admin/StoreSetting" component={StoreSetting} />
            <Route path="/admin/customersupport" component={CustomerSupport} />
            <Route path="/admin/storepolicies" component={PoliciesSetting} />
            <Route path="/admin/PaymentSetting" component={PaymentSetting} />
          </Switch>
          <Container fluid>
            <AdminFooter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
