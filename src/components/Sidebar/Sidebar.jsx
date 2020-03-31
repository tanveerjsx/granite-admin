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
/*eslint-disable*/
import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  div,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaAd } from "react-icons/fa";
import { AiOutlineGlobal, AiFillLike } from "react-icons/ai";
import { FaShoppingBag, FaAmbulance } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";

var ps;

class Sidebar extends React.Component {
  state = {
    collapseOpen: false
  };
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false
    });
  };
  // creates the links that appear in the left menu / Sidebar
  createLinks = routes => {
    return routes.map((prop, key) => {
      //If Part Start

      if (prop.layout == "/admin") {
        return prop.name !== "Setting" ? (
          <NavItem key={key}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              onClick={this.closeCollapse}
              activeClassName="active"
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        ) : (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i className="ni ni-settings-gear-65 text-blue" /> Setting
            </DropdownToggle>
            <DropdownMenu right>
              {/* Store Settings */}
              <DropdownItem>
                <NavLink
                  to={prop.layout + "/StoreSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <FaShoppingBag /> {" Store"}
                </NavLink>
              </DropdownItem>
              {/* Loaction */}
              <DropdownItem>
                <NavLink
                  to={prop.layout + "/StoreSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiOutlineGlobal /> {" Location"}
                </NavLink>
              </DropdownItem>
              {/* Payment */}
              <DropdownItem>
                <NavLink
                  to={prop.layout + "/PaymentSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <IoMdCash />
                  {" Payment"}
                </NavLink>
              </DropdownItem>
              {/* Store Policies */}
              <DropdownItem>
                <NavLink
                  to={prop.layout + "/storepolicies"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <FaAmbulance /> {" Store Policies"}
                </NavLink>
              </DropdownItem>
              {/* Customer Support */}
              <DropdownItem>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Customer Support"}
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      }
      //If Part Ends here...
      // Else Part Start
      else {
        return prop.name !== "Settings" ? (
          <NavItem key={key}>
            <NavLink
              to={prop.layout + prop.path}
              tag={NavLinkRRD}
              onClick={this.closeCollapse}
              activeClassName="active"
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </NavItem>
        ) : (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <i className="ni ni-settings-gear-65 text-blue" /> Setting
            </DropdownToggle>
            <DropdownMenu direction="right">
              {/* Withdrawal Settings  */}
              <div>
                <NavLink
                  to={prop.layout + "/StoreSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <FaShoppingBag /> {" Withdrawal Settings"}
                </NavLink>
              </div>
              {/* Payment Settings */}
              <div>
                <NavLink
                  to={prop.layout + "/StoreSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiOutlineGlobal /> {" Payment Settings"}
                </NavLink>
              </div>
              {/* Shipping Settings */}
              <div>
                <NavLink
                  to={prop.layout + "/PaymentSetting"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <IoMdCash />
                  {" Shipping Settings"}
                </NavLink>
              </div>
              {/* Refund Settings */}
              <div>
                <NavLink
                  to={prop.layout + "/storepolicies"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <FaAmbulance /> {" Refund Settings"}
                </NavLink>
              </div>
              {/* Review Settings */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Review Settings"}
                </NavLink>
              </div>

              {/* Vendor Registration */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Vendor Registration"}
                </NavLink>
              </div>
              {/* Store Style */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Store Style"}
                </NavLink>
              </div>
              {/* Dashboard Style */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Dashboard Style"}
                </NavLink>
              </div>
              {/* Dashboard Pages */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Dashboard Pages"}
                </NavLink>
              </div>
              {/* Menu Manager */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Menu Manager"}
                </NavLink>
              </div>
              {/* Notification Manager */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Notification Manager"}
                </NavLink>
              </div>
              {/* Email Settings */}
              <div>
                <NavLink
                  to={prop.layout + "/customersupport"}
                  tag={NavLinkRRD}
                  onClick={this.closeCollapse}
                  activeClassName="active"
                >
                  <AiFillLike /> {" Email Setting"}
                </NavLink>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      }

      //Else Part End Here
    });
  };
  render() {
    const { bgColor, routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank"
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              {/* <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              /> */}
              <h3>{"Granite Warehouse".toUpperCase()}</h3>
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <div
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <div>Action</div>
                <div>Another action</div>
                <div divider />
                <div>Something else here</div>
              </div>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <div className="dropdown-menu-arrow" right>
                <div className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </div>
                <div to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </div>
                <div to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </div>

                <div to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </div>
                <div to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </div>
                <div divider />
                <div href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </div>
              </div>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;
