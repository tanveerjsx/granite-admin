import React from "react";
import { FormGroup, Input, InputGroup, Form, Button } from "reactstrap";
import "./style.css";
const SearchField = props => {
  return (
    <Form inline>
      <FormGroup>
        <Input
          type="text"
          name="searchName"
          className="searchButton"
          id="searchbar"
          placeholder="Search"
          onChange={props.changeSearch}
        />
      </FormGroup>{" "}
      <FormGroup>
        <Input
          placeholder="category"
          className="searchProduct"
          name="searchCategory"
          type="select"
          onChange={props.changeSearch}
        >
          <option value="">Select Category</option>
          {props.Categories &&
            props.Categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Color"
          className="searchProduct"
          name="searchColor"
          type="select"
          onChange={props.changeSearch}
        >
          <option value="">Select Color</option>
          {props.Colors &&
            props.Colors.map(color => (
              <option key={color._id} value={color.name}>
                {color.name}
              </option>
            ))}
        </Input>
      </FormGroup>
    </Form>
  );
};

export default SearchField;
