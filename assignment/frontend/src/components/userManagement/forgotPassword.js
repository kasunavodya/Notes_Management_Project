/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   FORGOT PW PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import Header from '../header/header';
import '../../assets/css/forgotPassword.css';
import Axios from 'axios';

const initialState = {
    "email": '',
    "contact": '',
    "users": [],
    "resetAnswer": ''
}

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

     /**
    * DESCRIPTION       -       The function written to get the validate user details
    * METHOD CALLS      -       setState()
    * API CALL          -       VALIDATE USER by EMAIL
    */
    onSubmit(e) {
        e.preventDefault();

        Axios.get(`http://localhost:3001/user/validateUser/${this.state.email}`)
            .then(response => {
                this.setState({ users: response.data.data });
                console.log(this.state.users.length);

                if (this.state.users.length == 0) {
                    alert('Email Address Invalid!!');
                } else {
                    this.state.users.length > 0 && this.state.users.map((item, key) => {
                        if (item.userContact === this.state.contact && item.resetAnswer == this.state.resetAnswer) {
                            window.location = `/resetPassword/${item._id}`
                        } else {
                            alert('Email or Contact Invalid!!!');
                        }
                    })
                }
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div class="forgotPW__container">
                    <div class="container__child forgotPW__form">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <b><label for="email">Email</label></b>
                                <input
                                    style={{ backgroundColor: "white" }}
                                    class="form-control"
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    required />
                            </div><br />
                            <div class="form-group">
                                <b><label for="password">Contact Number</label></b>
                                <input
                                    style={{ backgroundColor: "white" }}
                                    class="form-control"
                                    type="tel"
                                    name="contact"
                                    pattern="[0-9]{10}"
                                    id="contact"
                                    value={this.state.contact}
                                    onChange={this.onChange}
                                    required />
                            </div><br />
                            <div class="form-group">
                                <b><label for="contact">Enter last 4 digits of your NIC card</label></b>
                                <input
                                    style={{ backgroundColor: "white" }}
                                    class="form-control"
                                    type="number"
                                    name="resetAnswer"
                                    id="resetAnswer"
                                    value={this.state.resetAnswer}
                                    onChange={this.onChange}
                                    required />
                            </div><br />

                            <div class="m-t-lg">
                                <ul class="list-inline">
                                    <li>
                                        <input class="btn btn--form" style={{ width: '100%' }} type="submit" value="Validate Me" />
                                    </li>
                                    <li><br />
                                        <a class="signup__link" href="/" style = {{color: "#72beed", fontSize: "15px"}}>Remember Password</a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}