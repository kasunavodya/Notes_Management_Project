/**
 * SCOPE    -   NOTES MANAGEMENT
 * PAGE     -   VIEW NOTE LIST PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';

const initialStates = {
    "notes": [],
    "searchNote": ''
}

export default class viewNotePage extends Component {
    constructor(props) {
        super(props);
        this.navigateToUpdatePage = this.navigateToUpdatePage.bind(this);
        this.navigateToDeletePage = this.navigateToDeletePage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ searchNote: e.target.value });
    }

    /**
     * DESCRIPTION      -       The function written to get all notes details
     * METHOD CALLS     -       setState()
     * API CALL         -       GET ALL NOTES
     */
    componentDidMount(e) {
        Axios.get('http://localhost:3001/note/getAllNotes')
            .then(response => {
                this.setState({ notes: response.data.data });
            }).catch(error => {
                alert(error.message);
            })
    }

    /**
     * DESCRIPTION      -       The function to navigate to the update note page
     */
    navigateToUpdatePage(e, noteId) {
        window.location = `/updateNote/${noteId}`;
    }

    /**
     * DESCRIPTION      -       The function to navigate to the delete note page
     */
    navigateToDeletePage(e, noteId) {
        window.location = `/deleteNote/${noteId}`;
    }

    render() {
        return (
            <div>
                <div class="wrapper">
                    <nav>
                        <header><br />
                            &nbsp; &nbsp; &nbsp; &nbsp; STUDENT PANEL
                        </header><hr style={{ color: "white" }} />
                        <ul><br />
                            <li><a href="/viewNotes" style={{ color: "white" }} class="active">View Note List</a></li>
                            <li><a href="/addNotes" style={{ color: "white" }} >Add Notes</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>NOTE LIST</h1>

                        <div class="wrap">
                            <div class="search">
                                <input
                                    type="text"
                                    placeholder="Search by note subject"
                                    name="searchNote"
                                    id="searchNote"
                                    onChange={this.onChange}
                                    class="searchTerm" />
                                <button type="submit" class="searchButton">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div><br /><br /><br />

                        <table class="table border shadow" id="casti_male">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">SUBJECT</th>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">NOTE DESCRIPTION</th>
                                    <th scope="col">DATE/TIME</th>
                                    <th scope="col">EDIT</th>
                                    <th scope="col">DELETE</th>

                                </tr>
                            </thead>
                            <tbody>
                            {this.state.notes.length > 0 && this.state.notes.filter((values) => {
                                    if (this.state.searchNote == "") {
                                        return values;
                                    } else if (values.subject.toLowerCase().includes(this.state.searchNote.toLowerCase())) {
                                        return values;
                                    }
                                }).map((item, index) =>
                                    <tr>
                                        <td><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>{item.subject}</b></span></td>
                                        <td>{item.title}</td>
                                        <td><textarea rows="5" cols="60" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>{item.description}</textarea></td>
                                        <td>{item.datetime}</td>
                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-success btn-sm rounded-0" style={{ backgroundColor: 'black' }} type="button" data-toggle="tooltip" data-placement="top" title="Edit" onClick={e => this.navigateToUpdatePage(e, item._id)}><i class="fa fa-edit"></i></button>
                                            </li>
                                        </td>

                                        <td>
                                            <li class="list-inline-item">
                                                <button class="btn btn-danger btn-sm rounded-0" style={{ backgroundColor: 'black' }} type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={e => this.navigateToDeletePage(e, item._id)}><i class="fa fa-trash"></i></button>
                                            </li>
                                        </td>
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





