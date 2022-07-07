/**
 * SCOPE    -   USER MANAGEMENT
 * PAGE     -   USER REPORT DETAILS PAGE 
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
    "userreport": [],
    "searchReport": '',
}

export default class userReports extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchReport: e.target.value });
    }

    /**
     * DESCRIPTION      -       The function written to get all user report details
     * METHOD CALLS     -       setState()
     * API CALL         -       GET USER REPORT DETAILS
     */
    componentDidMount(e) {

        Axios.get('http://localhost:3001/userreport/getAllUserReports')
            .then(response => {
                this.setState({ userreport: response.data.data });
            }).catch(error => {
                alert(error.message);
            });
    }

    //generate Report
    jsPdfGeneratorReport() {

        var doc = new jsPDF('p', 'pt');
        doc.text(300, 20, 'SUMMARY OF USER REPORTS', 'center');

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

        doc.text(47, 540, newdat);
        doc.text(47, 560, 'Function: User Report Management')
        doc.text(47, 580, 'By Administrator')

        doc.setFont('courier')

        doc.autoTable({ html: '#userReportTable' })

        doc.addFont('helvetica', 'normal')

        //save PDF
        doc.save('userReport.pdf')
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
                            <li><a href="/userReports" style={{ color: "white" }} class="active">User Report Details</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>VIEW USER REPORTS</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by user email"
                                    name="searchEmail"
                                    id="searchEmail"
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
                                            <center>Total Reports: {this.state.userreport.length}</center></h6></b>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-sm-6 mb-xl-0 mb-4">
                                    <button onClick={this.jsPdfGeneratorReport} type="button" style={{ height: "68px" }} class="btn btn-dark">Download Report</button>
                                </div>
                            </div>
                        </div>
                        <br />

                        <table class="table table-striped table-class" id="userReportTable">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">USER EMAIL</th>
                                    <th scope="col">ACCOUNT TYPE</th>
                                    <th scope="col">DESCRIPTION</th>
                                    <th scope="col">ACTION</th>
                                    <th scope="col">DATE TIME</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userreport.length > 0 && this.state.userreport.filter((values) => {
                                    if (this.state.searchReport == "") {
                                        return values;
                                    } else if (values.userEmail.toLowerCase().includes(this.state.searchReport.toLowerCase())) {
                                        return values;
                                    }
                                }).map((item, index) =>
                                    <tr>
                                        <td style={{ color: 'blue' }}><u><i>{item.userEmail}</i></u></td>
                                        <td>{item.userCategory}</td>
                                        <td>{item.description}</td>
                                        <td>{item.action}</td>
                                        <td>{item.datetime}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        )
    }
}





