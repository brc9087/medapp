import React, { Component } from "react";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.userName) {
      alert("Enter your username please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.userName}`
      );
    } else {
      alert(`Hello ${this.state.userName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Please fill out all fields:
        </p>
        <form className="form">
          <input
            value={this.state.userName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
      <input
            value={this.state.userName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
              <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Re-enter password"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Registration;
