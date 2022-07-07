/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   RESET PW PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from "react";
import Header from "../header/header";
import "../../assets/css/resetPassword.css";
import Axios from "axios";
import PasswordChecklist from "react-password-checklist";

const initialStates = {
  password: "",
  confirmpassword: "",
  user: [],
  email: "",
  currentDateTime: Date().toLocaleString(),
};
export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialStates;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
     * DESCRIPTION      -       The function written to get user by ID
     * METHOD CALLS     -       setState()
     * API CALL         -       GET USER BY ID
     */
  componentDidMount() {
    Axios.get(
      `http://localhost:3001/user/getUserById/${this.props.match.params.id}`
    ).then((response) => {
      this.setState({ user: response.data.data });
      this.setState({ email: this.state.user.userEmail });
    }).catch((error) => {
      alert(error.message);
    });
  }

  /**
    * DESCRIPTION       -       The function written to update PW
    * METHOD CALLS      -       setState()
    * API CALL          -       SUBMIT RESET PW
    */
  onSubmit(e) {
    e.preventDefault();

    if (this.state.password !== this.state.confirmpassword) {
      alert("Password Mismatch!!");
    } else {
      let updUser = {
        newPassword: this.state.password,
      };
      Axios.put(
        `http://localhost:3001/user/resetPassword/${this.props.match.params.id}`,
        updUser
      ).then((response) => {
        let userReport = {
          userEmail: this.state.email,
          userCategory: "Student",
          description: "Password reset of User",
          action: "RESET PASSWORD",
          datetime: this.state.currentDateTime,
        };
        Axios.post(
          "http://localhost:3001/userreport/addUserReport",
          userReport
        ).then((response) => {
          alert("Password Reset Successful!!");
          window.location = "/";
        }).catch((error) => {
          alert(error.message);
        });
      })
        .catch((error) => {
          alert(error.message);
        });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div class="resetPW__container" style = {{marginTop: '-30px'}}>
          <div class="container__child resetPW__form">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <b><label for="email">New Password</label></b>
                <input
                  style={{ backgroundColor: "white" }}
                  class="form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                />
              </div>
              <br />

              <div class="form-group">
                <b><label for="password">Confirm New Password</label></b>
                <input
                  style={{ backgroundColor: "white" }}
                  class="form-control"
                  type="password"
                  name="confirmpassword"
                  id="confirmpassword"
                  value={this.state.confirmpassword}
                  onChange={this.onChange}
                  required
                />
              </div>
              <br />

              <PasswordChecklist
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "match",
                ]}
                minLength={5}
                value={this.state.password}
                valueAgain={this.state.confirmpassword}
                onChange={(isValid) => { }}
                className="passwordCheck"
              />
              <br />

              <div class="m-t-lg">
                <ul class="list-inline">
                  <li>
                    <input
                      style={{width: "100%"}}
                      class="btn btn--form"
                      type="submit"
                      value="Reset Password"
                    />
                  </li>
                  <li>
                    <br />
                    <a class="signup__link" href="/" style = {{color: "#72beed", fontSize: "15px"}}>
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
