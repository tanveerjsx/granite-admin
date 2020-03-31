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
import React, { Component } from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import VendorLayout from "./layouts/Vendor";
import { connect } from "react-redux";

// import "react-toastify/dist/ReactToastify.css";
// import "assets/vendor/nucleo/css/nucleo.css";
// import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
// //import "assets/scss/argon-dashboard-react.scss";

class App extends Component {
  state = {};
  componentDidMount = () => {};
  render() {
    return (
      <Router history={this.props.appHistory}>
        <div>
          <Route path="/auth" render={props => <AuthLayout {...props} />} />

          {this.props.auth.role === "admin" && (
            <Switch>
              <Route
                path="/admin"
                render={props => <AdminLayout {...props} />}
              />
            </Switch>
          )}
          {this.props.auth.role === "vendor" && (
            <Switch>
              <Route
                path="/vendor"
                render={props => <VendorLayout {...props} />}
              />
            </Switch>
          )}
          <Redirect to="/auth/login" />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
