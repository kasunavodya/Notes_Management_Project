/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   USER DETAILS PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import '../../assets/css/admin.css';
import user from '../../assets/images/user.png';
import Axios from 'axios';

const initialStates = {
    "userlist": []
}

export default class userDetails extends Component {
    constructor(props) {
        super(props);
        this.navigatetoDashboardPage = this.navigatetoDashboardPage.bind(this);
        this.state = initialStates;
        this.state = {
            id: this.props.match.params.id
        }
    }

    /**
     * DESCRIPTION      -       The function written to get user details by ID
     * METHOD CALLS     -       setState()
     * API CALL         -       GET USERS BY ID
     */
    componentDidMount(e) {
        Axios.get(`http://localhost:3001/user/getUserById/${this.state.id}`)
            .then(response => {
                this.setState({ userlist: response.data.data });
                this.setState({ userFullName: this.state.userlist.userFullName });
                this.setState({ userEmail: this.state.userlist.userEmail });
                this.setState({ userContact: this.state.userlist.userContact });
                this.setState({ userCategory: this.state.userlist.userCategory });
            }).catch(error => {
                console.log(error.message);
            })
    }

    /**
     * DESCRIPTION      -       The function to navigate to the dashboard page
     */
    navigatetoDashboardPage(e, item_id) {
        window.location = "/dashboard";
    }

    render() {
        return (
            <div>
                <div class="wrapper">
                    <nav>
                        <header><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; ADMIN PANEL
                        </header><hr style={{ color: "white" }} />
                        <ul><br />
                            <li><a href="/dashboard" style={{ color: "white" }} >User List</a></li>
                            <li><a href="/viewAdmins" style={{ color: "white" }} >Administrator List</a></li>
                            <li><a href="/viewStudents" style={{ color: "white" }} >Student List</a></li>
                            <li><a href="/userReports" style={{ color: "white" }} >User Report Details</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>VIEW USER DETAILS</h1>
                        <section class="vh-100" style={{ backgroundColor: "#eee;", marginTop: "-120px" }}>
                            <div class="container py-5 h-100">
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-md-15 col-xl-5">
                                        <div class="card" style={{ borderRadius: "15px" }}>
                                            <div class="card-body text-center">
                                                <h2 style={{ width: "100%", textTransform: "uppercase" }}>{this.state.userCategory}</h2>
                                                <div class="mt-3 mb-4">
                                                    <img src={user} class="rounded-circle img-fluid" style={{ width: "200px" }} />
                                                </div>
                                                <h4 class="mb-2">{this.state.userFullName}</h4>
                                                <p class="text-muted mb-4">{this.state.userEmail} <span class="mx-2">|</span> <a
                                                    href="#!">{this.state.userContact}</a></p>
                                                <button type="button" class="btn btn-danger btn-sm rounded-0" style={{ backgroundColor: 'black' }} onClick={this.navigatetoDashboardPage}>
                                                    Back to Dashboard
                                                </button><br /><br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        )
    }
}





