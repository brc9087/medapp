import React, { Component } from "react";
import Header from "../components/Header/Header";
import "./registration.css";

class Registration extends Component {
    state = {
        userName: "",
        email: "",
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
            <div className="body">
                <div>
                    <Header Logo={"/logo/logo.png"} />
                </div>
                <div>




                    <div class="tile is-ancestor">
                        <div class="tile is-4 is-vertical is-parent">
                            <div class="tile is-child box">
                              
                                   
                                        <p>
                                            Please fill out all fields: </p>
                                        <input
                                            value={this.state.userName}
                                            name="userName"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Username"
                                        />
                                        <input
                                            value={this.state.email}
                                            name="email"
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
                    <button class="button is-info">Submit</button>
                                        
                                       
                                    

                    
                            </div>

                        </div>
                    </div>




                </div>
            </div>

        );
    }
}

export default Registration;
