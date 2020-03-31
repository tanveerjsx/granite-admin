import React from "react";
import { FormGroup, Input, InputGroup, Form, Button, Label } from "reactstrap";
import "./style.css";

const ShowEnteries = props => {
  return (
    <Form inline>
      <FormGroup>
        <Label className="lable">Show</Label>
        <Input
          type="select"
          className="entries"
          name="entries"
          id="entries"
          placeholder=""
          onChange={props.onChangeSearch}
        >
          <option>25</option>
          <option>50</option>
          <option>55</option>
          <option>100</option>
        </Input>
        <Label className="lable">Enteries</Label>
      </FormGroup>{" "}
    </Form>
  );
};
export default ShowEnteries;
