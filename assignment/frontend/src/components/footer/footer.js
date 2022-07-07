import React, { Component } from 'react'
import '../../assets/css/style.css';

export default class footer extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <p class="footer-head" >About</p>
                                <p class="about" style={{ position: "justify" }}>This online notes management platform provides an easy access portal for the students and administrators to manage their notes </p>
                                <br />
                                <div class="copyright">
                                    &copy; Copyright <strong>INTERNSHIP ASSIGNMENT - 2022</strong>. All Rights Reserved
                                </div>
                                <div class="credits">
                                    Designed by: <a href="/">H.M. Kasuni Navodya</a>
                                </div>

                            </div>
                            <div class="col-lg-2 col-lg-offset-2 col-md-2 col-sm-3">
                                <p class="footer-head">Learn more</p>
                                <ul class="list-unstyled page-links">
                                    <li><a href="/">HOME</a></li>
                                    <li><a href="/">ABOUT</a></li>
                                    <li><a href="/">CONTACT</a></li>
                                    <li><a href="http://help.kfit.com/">FAQ</a></li>
                                    <li><a href="/">LOGIN</a></li>
                                    <li><a href="/register">SIGNUP</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-2 col-md-3 col-sm-3">

                                <p class="footer-head">Contact</p>
                                <ul class="list-unstyled social-links">
                                    <a href="mailto:ask@kfit.com">0773452221</a>
                                </ul>

                                <p class="footer-head">Email</p>
                                <ul class="list-unstyled social-links">
                                    <a href="mailto:ask@kfit.com">DailyNotez@gmail.com</a>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
