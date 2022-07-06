import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import Footer from "./components/footer/footer";

import Login from "./components/userManagement/login";
import Register from "./components/userManagement/register";
import ForgotPassword from "./components/userManagement/forgotPassword";
import ResetPassword from "./components/userManagement/resetPassword";
import AdminDashboard from "./components/administrator/adminDashboard";
import ViewNotePage from "./components/notesManagement/viewNotes";
import AddNotePage from "./components/notesManagement/addNote";
import DeleteNotePage from "./components/notesManagement/deleteNote";
import UpdateNotePage from "./components/notesManagement/updateNote";
import UserReportPage from "./components/administrator/userReports";
import ViewStudentsListPage from "./components/administrator/viewStudentList";
import ViewAdminsListPage from "./components/administrator/viewAdminList";

function App() {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/resetPassword/:id" component={ ResetPassword } />
            <Route path="/dashboard" component={AdminDashboard} />
            <Route path="/viewNotes" component={ViewNotePage} />
            <Route path="/addNotes" component={AddNotePage} />
            <Route path="/deleteNote/:id" component={DeleteNotePage} />
            <Route path="/updateNote/:id" component={UpdateNotePage} />
            <Route path="/userReports" component={UserReportPage} />
            <Route path="/viewStudents" component={ViewStudentsListPage} />
            <Route path="/viewAdmins" component={ViewAdminsListPage} />
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
