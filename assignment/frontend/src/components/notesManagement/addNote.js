import React, { Component } from 'react'
import ss from '../../assets/images/notesImage.jpg';
import '../../assets/css/admin.css';
import Axios from 'axios';

const initialStates = {
    "subject": '',
    "title": '',
    "description": '',
    "descriptionError": '',
    "currentDateTime": Date().toLocaleString()
}

export default class addNotePage extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validate = () => {
        let isError = false;
        const errors = {
            descriptionError: ''
        };

        if (this.state.description.length < 6) {
            isError = true;
            errors.descriptionError = "Needs to be more than 5 characters long";
        }

        if (isError) {
            this.setState({
                ...this.state,
                ...errors
            });
        }

        return isError;
    }

    onSubmit(e) {
        e.preventDefault();

        const err = this.validate();
        if (!err) {

            let note = {
                "subject": this.state.subject,
                "title": this.state.title,
                "description": this.state.description,
                "datetime": this.state.currentDateTime
            }
            Axios.post('http://localhost:3001/note/addNote', note)
                .then(response => {
                    alert('Note Details Added Successfully');
                    window.location = "/viewNotes";
                }).catch(error => {
                    alert(error.message);
                })

        }
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
                            <li><a href="/viewNotes" style={{ color: "white" }}>View Note List</a></li>
                            <li><a href="/addNotes" style={{ color: "white" }} class="active">Add Notes</a></li>
                            <li><a href="/" style={{ color: "white" }}>Logout</a></li>
                        </ul>
                    </nav>
                    <main>
                        <h1>ADD NOTE</h1>
                        <div class="container border rounded" style={{ width: '1000px' }}>
                            <div class="row">
                                <div class="col-lg-12 col-md-6">
                                    <form onSubmit={this.onSubmit}><br />
                                        <div className="form-group">
                                            <img class="d-block w-100" src={ss} alt="First slide" /><br />
                                            <span style={{ color: "black" }}>Subject<span style={{ color: "red", fontSize: "24px" }}>*</span></span>
                                            <select name="subject" id="subject" onChange={this.onChange} class="form-select" aria-label="Default select example" style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                                <option selected value="subject" disabled>Select Subject</option>
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Science">Science</option>
                                                <option value="History">History</option>
                                                <option value="English">English</option>
                                                <option value="IT">IT</option>
                                            </select><br />
                                            <br />
                                            <div className="form-group">
                                                <span style={{ color: "black" }}>Title<span style={{ color: "red", fontSize: "24px" }}>*</span></span> &emsp; &emsp; &emsp; <font color="red" style={{ fontSize: '14px' }}></font>
                                                <input
                                                    class="form-control"
                                                    type="text"
                                                    value={this.state.title}
                                                    name="title"
                                                    onChange={this.onChange}
                                                    id="title"
                                                    required
                                                    style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }} />
                                            </div>
                                            <br />
                                            <span style={{ color: "black" }}>Description<span style={{ color: "red", fontSize: "24px" }}>*</span></span>&emsp; &emsp;<font color="red" style={{ fontSize: '14px' }}>{this.state.descriptionError}</font>
                                            <textarea
                                                className="form-control"
                                                rows="7"
                                                value={this.state.description}
                                                name="description"
                                                onChange={this.onChange}
                                                id="description"
                                                required
                                                style={{ border: "1px solid #c8cfcb", backgroundColor: "#edf0eb" }}>
                                            </textarea></div><br />
                                        <button type="submit" style={{ width: '20%', marginLeft: '80%' }} className="btn btn-dark" id="submitBtn">Submit Note</button>
                                        <br /><br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}





