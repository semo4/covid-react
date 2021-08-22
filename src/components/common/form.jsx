import React, { Component } from "react";
import Joi from "joi-browser";
import { Label, Submit, Input, ErrorDiv } from "../styleComponents/login";
import SelectInput from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(value) {
    return <Submit disabled={this.validate()}>{value}</Submit>;
  }

  renderInput(name, label, type) {
    const { data, errors } = this.state;
    return (
      <React.Fragment>
        {type !== "hidden" ? <Label>{label}</Label> : ""}
        <Input
          key={name}
          name={name}
          type={type}
          value={data[name]}
          placeholder={label}
          onChange={this.handleChange}
        />
        {errors[name] && <ErrorDiv>{errors[name]}</ErrorDiv>}
      </React.Fragment>
    );
  }

  renderSelect(name, label, options) {
    const { errors, data } = this.state;
    return (
      <SelectInput
        name={name}
        value={data}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
