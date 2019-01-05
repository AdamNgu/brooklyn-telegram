import React from "react";
import { Redirect } from "react-router-dom";
import styles from "./Home.module.scss";

const saveToStorage = ({
  senderName,
  email,
  fullName,
  streetAddress,
  city,
  state,
  zipCode,
  message
}) => {
  const data = JSON.stringify({
    senderName,
    email,
    fullName,
    streetAddress,
    city,
    state,
    zipCode,
    message
  });
  localStorage.setItem("formData", data);
};

const loadFromStorage = () => {
  const data = localStorage.getItem("formData");
  const {
    senderName = "",
    email = "",
    fullName = "",
    streetAddress = "",
    city = "",
    state = "",
    zipCode = "",
    message = ""
  } = data ? JSON.parse(data) : {};
  return {
    senderName,
    email,
    fullName,
    streetAddress,
    city,
    state,
    zipCode,
    message
  };
};

class Home extends React.Component {
  state = { ...loadFromStorage(), formSubmitted: false };

  handleInputChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  handleInputBlur = field => event => {
    event.preventDefault();
    saveToStorage(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formSubmitted: true });
  };

  render() {
    const {
      formSubmitted,
      senderName,
      email,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      message
    } = this.state;
    return formSubmitted ? (
      <Redirect to="/payment" />
    ) : (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Sender name:
          <input
            type="text"
            value={senderName}
            onChange={this.handleInputChange("senderName")}
            onBlur={this.handleInputBlur("senderName")}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={this.handleInputChange("email")}
            onBlur={this.handleInputBlur("email")}
          />
        </label>
        <label>
          Recipient name:
          <input
            type="text"
            value={fullName}
            onChange={this.handleInputChange("fullName")}
            onBlur={this.handleInputBlur("fullName")}
          />
        </label>
        <label>
          Street address:
          <input
            type="text"
            value={streetAddress}
            onChange={this.handleInputChange("streetAddress")}
            onBlur={this.handleInputBlur("streetAddress")}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={this.handleInputChange("city")}
            onBlur={this.handleInputBlur("city")}
          />
        </label>
        <label>
          State / Province / Region:
          <input
            type="text"
            value={state}
            onChange={this.handleInputChange("state")}
            onBlur={this.handleInputBlur("state")}
          />
        </label>
        <label>
          Zip code:
          <input
            type="text"
            value={zipCode}
            onChange={this.handleInputChange("zipCode")}
            onBlur={this.handleInputBlur("zipCode")}
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={this.handleInputChange("message")}
            onBlur={this.handleInputBlur("message")}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Home;
