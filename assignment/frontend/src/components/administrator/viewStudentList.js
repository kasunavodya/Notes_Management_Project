import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';

const initialStates = {
    "userlist": [],
    "searchUser": '',
}

export default class studentList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchUser: e.target.value });
    }

    componentDidMount(e) {
        Axios.get('http://localhost:3001/user/getAllStudents')
            .then(response => {
                this.setState({ userlist: response.data.data });
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
                            <li><a href="/viewStudents" style={{ color: "white" }} class="active">Student List</a></li>
                            <li><a href="/userReports" style={{ color: "white" }} >User Report Details</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>VIEW STUDENT LIST</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by student name"
                                    name="searchUser"
                                    id="searchUser"
                                    onChange={this.onChange}
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br />

                        <div class="info" style={{ width: '13%'}}>
                            <b><h6>
                                Total Students: {this.state.userlist.length}</h6></b>
                        </div>
                        <br />

                        <table class="table border shadow">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">STUDENT FULLNAME</th>
                                    <th scope="col">STUDENT EMAIL</th>
                                    <th scope="col">STUDENT CONTACT</th>
                                    <th scope="col">STUDENT CATEGORY</th>

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




