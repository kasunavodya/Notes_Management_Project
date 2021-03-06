/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   VIEW ADMIN LIST  PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';

const initialStates = {
    "userlist": [],
    "searchUser": '',
}

export default class adminList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.navigateToUserPage = this.navigateToUserPage.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchUser: e.target.value });
    }

    /**
     * DESCRIPTION      -       The function written to get all admin details
     * METHOD CALLS     -       setState()
     * API CALL         -       GET ADMIN DETAILS
     */
    componentDidMount(e) {
        Axios.get('http://localhost:3001/user/getAllAdministrators')
            .then(response => {
                this.setState({ userlist: response.data.data });
            }).catch(error => {
                alert(error.message);
            });
    }

    /**
     * DESCRIPTION      -       The function to navigate to the user list page
     */
    navigateToUserPage(e, userId) {
        window.location = `/userDetails/${userId}`;
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
                            <li><a href="/viewAdmins" style={{ color: "white" }} class="active">Administrator List</a></li>
                            <li><a href="/viewStudents" style={{ color: "white" }} >Student List</a></li>
                            <li><a href="/userReports" style={{ color: "white" }} >User Report Details</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>VIEW ADMINISTRATOR LIST</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by administrator name"
                                    name="searchUser"
                                    id="searchUser"
                                    onChange={this.onChange}
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br />

                        <div class="info" style={{ width: '15%' }}>
                            <b><h6>
                                Total Administrators: {this.state.userlist.length}</h6></b>
                        </div>
                        <br />

                        <table class="table table-striped table-class" id="table-id">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ADMIN FULLNAME</th>
                                    <th scope="col">ADMIN EMAIL</th>
                                    <th scope="col">ADMIN CONTACT</th>
                                    <th scope="col">ADMIN ACCOUNT TYPE</th>
                                    <th scope="col">VIEW</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userlist.length > 0 && this.state.userlist.filter((values) => {
                                    if (this.state.searchUser == "") {
                                        return values;
                                    } else if (values.userFullName.toLowerCase().includes(this.state.searchUser.toLowerCase())) {
                                        return values;
                                    }
                                }).map((item, index) =>
                                    <tr>
                                        <td>{item.userFullName}</td>
                                        <td style={{ color: 'blue' }}><u><i>{item.userEmail}</i></u></td>
                                        <td>{"(+94)-" + item.userContact}</td>
                                        <td>{item.userCategory}</td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'black' }} type="button" data-toggle="tooltip" data-placement="top" onClick={e => this.navigateToUserPage(e, item._id)} title="Edit"><i class="fa fa-eye"></i></button>
                                            </li>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table><br></br>
                    </main>
                </div>
            </div>
        )
    }
}





