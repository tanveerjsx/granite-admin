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
import Index from "./../views/vendor/Index";
import Logout from "./../views/Auth/Logout";
import Login from "./../views/Auth/Login.jsx";
import Products from "./../views/Product/Products.jsx";
import Articles from "./../views/Article/Articles";
import Orders from "./../views/Order/Orders";
import Coupons from "./../views/Coupon/Coupons";
import Settings from "./../views/Setting/Settings";
import Reviews from "../views/Product/Reviews";
import Payments from "./../views/Order/Payments";
import Refund from "../views/Order/Refunds";
import Reports from "../views/Report/Reports";
import addToMyStore from "../views/Product/AddToStore";

var vendorRoutes = [
  {
    path: "/index",
    name: "Vendor Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/vendor"
  },
  {
    path: "/articles",
    name: "Articles",
    icon: "ni ni-collection text-blue",
    component: Articles,
    layout: "/vendor"
  },
  {
    path: "/products",
    name: "My Products",
    icon: "ni ni-planet text-blue",
    component: Products,
    layout: "/vendor"
  },
  {
    path: "/order",
    name: "Orders",
    icon: "ni ni-cart text-blue",
    component: Orders,
    layout: "/vendor"
  },
  {
    path: "/coupons",
    name: "Coupons",
    icon: "ni ni-spaceship text-red",
    component: Coupons,
    layout: "/vendor"
  },
  {
    path: "/refund",
    name: "Refunds",
    icon: "ni ni-planet text-orange",
    component: Refund,
    layout: "/vendor"
  },
  {
    path: "/addToMyStore",
    name: "Add to My Store",
    icon: "ni ni-folder-17 text-orange",
    component: addToMyStore,
    layout: "/vendor"
  },

  {
    path: "/setting",
    name: "Settings",
    icon: "ni ni-settings-gear-65 text-blue",
    component: Settings,
    layout: "/vendor"
  },
  {
    path: "/payment",
    name: "Payment",
    icon: "ni ni-credit-card text-red",
    component: Payments,
    layout: "/vendor"
  },
  {
    path: "/ledgerBook",
    name: "Ledger Book",
    icon: "ni ni-collection text-blue",
    component: Products,
    layout: "/vendor"
  },
  {
    path: "/reports",
    name: "Reports",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Reports,
    layout: "/vendor"
  },
  {
    path: "/review",
    name: "Reviews",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Reviews,
    layout: "/vendor"
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
export default vendorRoutes;
