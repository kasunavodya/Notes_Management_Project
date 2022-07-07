/**
 * SCOPE    -   NOTES MANAGEMENT
 * PAGE     -   DELETE NOTE PAGE 
 * 
 * =====================================
 * CREATED BY           :   Kasuni Makalanda
 */

import React, { Component } from 'react'
import '../../assets/css/admin.css';
import Axios from 'axios';

const initialStates = {
    "notes": []
}

export default class deleteNotePage extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.navigatetoViewNotePage = this.navigatetoViewNotePage.bind(this);
        this.state = initialStates;
        this.state = {
            id: this.props.match.params.id
        }
    }

    /**
     * DESCRIPTION      -       The function written to get the note details by ID
     * METHOD CALLS     -       setState()
     * API CALL         -       GET NOTE BY ID
     */
    componentDidMount() {
        Axios.get(`http://localhost:3001/note/getNoteById/${this.state.id}`)
            .then(response => {
                this.setState({ notes: response.data.data });
                this.setState({ subject: this.state.notes.subject });
                this.setState({ title: this.state.notes.title });
                this.setState({ description: this.state.notes.description });
                this.setState({ datetime: this.state.notes.datetime });
            }).catch(error => {
                console.log(error.message);
            })
    }

    /**
    * DESCRIPTION       -       The function written to delete the note details.
    * METHOD CALLS      -       setState()
    * API CALL          -       DELETE NOTE DETAILS
    */
    onSubmit(e) {
        e.preventDefault();
        Axios.delete(`http://localhost:3001/note/deleteNote/${this.state.id}`)
            .then(response => {
                alert('Note deleted Successfully');
                window.location = "/viewNotes";
            }).catch(error => {
                console.log(error.message);
            })
    }

    /**
     * DESCRIPTION      -       The function to navigate to the view notes page
     */
    navigatetoViewNotePage(e, item_id) {
        window.location = "/viewNotes";
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
                        <h1>DELETE CONFIRMATION</h1>
                        <div class="content">
                            <div class="wrapper-1">
                                <div class="wrapper-2">

                                    <div class="alert alert-danger" role="alert">
                                        <center><p>Are you sure you want to permanently remove this note?</p><hr />
                                            By deleting this note detail you can't undo this action.</center>
                                    </div><br />

                                    <div class="m-t-lg">
                                        <ul class="list-inline">
                                            <li>
                                                <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;" }}><b>Subject:</b>&nbsp;&nbsp;<b><span class="highlight" style={{ backgroundColor: '#f0ec0e', padding: '0.4em 0.6em', color: 'red' }} ><b>{this.state.subject}</b></span></b></span><br/><br/>

                                                <span style={{ color: "black", fontFamily: "'Abril Fatface', cursive;"}}><b>Title:</b> {this.state.title}</span><br />
                                            </li>
                                        </ul>
                                    </div>

                                    <p style={{ color: "black", textAlign: "Justify", fontFamily: "system-ui" }}>{this.state.description}</p><br />

                                    <button class="cancel" onClick={this.navigatetoViewNotePage} style={{ float: "left" }}>
                                        Cancel
                                    </button>
                                    <button class="delete" onClick={this.onSubmit} style={{ float: "right" }}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        )
    }
}
