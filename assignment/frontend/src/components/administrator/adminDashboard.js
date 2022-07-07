/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   ADMIN DASHBOARD 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';
import 'jspdf-autotable';
import jsPDF from 'jspdf';

const initialStates = {
    "userlist": [],
    "searchUser": '',
}

export default class adminDashboard extends Component {
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
     * DESCRIPTION      -       The function written to get all the user details
     * METHOD CALLS     -       setState()
     * API CALL         -       GET ALL USERS
     */
    componentDidMount(e) {
        Axios.get('http://localhost:3001/user/getAllUsers')
            .then(response => {
                this.setState({ userlist: response.data.data });
            }).catch(error => {
                alert(error.message);
            });
    }

    /**
     * DESCRIPTION      -       The function to navigate to the user details page
     */
    navigateToUserPage(e, userId) {
        window.location = `/userDetails/${userId}`;
    }

    //generate user details Report
    jsPdfGeneratorUser() {

        var doc = new jsPDF('p', 'pt');
        doc.text(300, 20, 'SUMMARY OF USER DETAILS', 'center');

        var today = new Date();
        var curr_date = today.getDate();
        var curr_month = today.getMonth();
        var curr_year = today.getFullYear();

        var m_names = new Array("January", "February", "March",
            "April", "May", "June", "July",
            "August", "September",
            "October", "November", "December");

        today = m_names[curr_month] + " " + curr_date + ", " + curr_year;
        var newdat = today;

        doc.setFont("italic");
        doc.setFontSize(12);

        doc.text(47, 240, newdat);
        doc.text(47, 260, 'Function: User Management')
        doc.text(47, 280, 'By Administrator')

        doc.setFont('courier')

        doc.autoTable({ html: '#userTable' })

        doc.addFont('helvetica', 'normal')

        //save PDF
        doc.save('userDetails.pdf')
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
                            <li><a href="/dashboard" style={{ color: "white" }} class="active">User List</a></li>
                            <li><a href="/viewAdmins" style={{ color: "white" }} >Administrator List</a></li>
                            <li><a href="/viewStudents" style={{ color: "white" }} >Student List</a></li>
                            <li><a href="/userReports" style={{ color: "white" }} >User Report Details</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>VIEW USERS</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by user name"
                                    name="searchUser"
                                    id="searchUser"
                                    onChange={this.onChange}
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br />

                        <div class="container-fluid py-4">
                            <div class="row">
                                <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
                                    <div class="info">
                                        <b><h6>
                                            <center>Total Users: {this.state.userlist.length}</center></h6></b>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
                                    <button onClick={this.jsPdfGeneratorUser} type="button" style={{ height: "68px" }} class="btn btn-dark">Download Report</button>
                                </div>
                            </div>
                        </div>

                        <table class="table table-striped table-class" id="userTable">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">USER FULLNAME</th>
                                    <th scope="col">USER EMAIL</th>
                                    <th scope="col">USER CONTACT</th>
                                    <th scope="col">ACCOUNT TYPE</th>
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





