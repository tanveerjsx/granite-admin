import React from "react";
import "./style.css";
import { FormGroup, Input, InputGroup, Form, Button } from "reactstrap";
const SearchField = props => {
  return (
    <Form inline>
      <FormGroup>
        <Input
          type="text"
          className="searchButton"
          name="search"
          id="searchbar"
          placeholder="Search"
          onChange={props.onChange}
        />
      </FormGroup>{" "}
    </Form>
  );
};

export default SearchField;
