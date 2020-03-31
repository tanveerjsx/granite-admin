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
import Index from "./views/Index.jsx";
import Logout from "./views/Auth/Logout";
import Login from "./views/Auth/Login.jsx";
import Products from "./views/Product/Products.jsx";
import Categories from "./views/Category/Categories.jsx";
import Customers from "./views/User/Users";
import Articles from "./views/Article/Articles";
import Orders from "./views/Order/Orders";
import Coupons from "./views/Coupon/Coupons";
import Settings from "./views/Setting/Settings";
import Withdrawl from "./views/Order/Withdrawl";
import StoreVendor from "./views/User/StoreVender";
import Reviews from "./views/Product/Reviews";
import Refunds from "./views/Order/Refunds";
import Reports from "./views/Report/Reports";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/articles",
    name: "Articles",
    icon: "ni ni-collection text-blue",
    component: Articles,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "ni ni-app text-red",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "ni ni-ungroup text-orage",
    component: Categories,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "ni ni-cart text-blue",
    component: Orders,
    layout: "/admin"
  },
  {
    path: "/withdraw",
    name: "Withdrawl",
    icon: "ni ni-credit-card text-orange",
    component: Withdrawl,
    layout: "/admin"
  },
  {
    path: "/Coupons",
    name: "Coupons",
    icon: "ni ni-spaceship text-red",
    component: Coupons,
    layout: "/admin"
  },
  {
    path: "/vendorstore",
    name: "Store Vendor",
    icon: "ni ni-single-02 text-red",
    component: StoreVendor,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Customers",
    icon: "ni ni-circle-08 text-blue",
    component: Customers,
    layout: "/admin"
  },
  {
    path: "/refund",
    name: "Refund",
    icon: "ni ni-send text-blue",
    component: Refunds,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "Setting",
    icon: "ni ni-settings-gear-65 text-blue",
    component: Settings,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/review",
    name: "Review",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Reviews,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "ni ni-user-run",
    component: Logout,
    layout: "/auth"
  }
];
export default routes;
