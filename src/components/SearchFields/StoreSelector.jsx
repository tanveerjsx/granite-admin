import React from "react";
import { FormGroup, Input, InputGroup, Form, Button } from "reactstrap";
import "./style.css";
const StoreSelector = props => {
  return (
    <Form inline>
      <FormGroup>
        <Input
          placeholder={`${props.placeholder}`}
          className="select"
          name="select"
          type="select"
          onChange={props.changeSelect}
        >
          <option value="">{`${props.placeholder}`}</option>
          {props.data &&
            props.data.map(element => (
              <option key={element._id} value={element._id}>
                {element.storeName}
              </option>
            ))}
        </Input>
      </FormGroup>
    </Form>
  );
};

export default StoreSelector;
