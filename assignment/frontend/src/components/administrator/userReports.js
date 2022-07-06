import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';

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

    componentDidMount(e) {

        Axios.get('http://localhost:3001/userreport/getAllUserReports')
            .then(response => {
                this.setState({ userreport: response.data.data });
            }).catch(error => {
                alert(error.message);
            });
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

                        <div class="info" style={{ width: '13%'}}>
                            <b><h6>
                                Total Reports: {this.state.userreport.length}</h6></b>
                        </div>
                        <br />

                        <table class="table border shadow">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">USER EMAIL</th>
                                    <th scope="col">USER CATEGORY</th>
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





