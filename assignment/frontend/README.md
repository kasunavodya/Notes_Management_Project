# NOTES MANAGEMENT PROJECT - INTERNSHIP ASSIGNMENT

**DEPENDENCIES/DEV-DEPENDENCIES INSTALLAION**

****************** Backend ******************
dependencies - 
    body-parser
    config 
    cors 
    dotenv 
    express 
    mongoose 
    nodemon 

devDependencies -
    jest 
    supertest 

****************** Frontend ******************
dependencies - 
    axios
    jspdf
    jspdf-autotable
    react
    react-dom
    react-password-checklist
    react-router-dom

**BACKEND FILES**

models - 
    Notes.js
    User.js
    UserReport.js

routes - 
    Note.js
    User.js
    UserReport.js

.env file
test.env file
server.js file
gitignore file

**FRONTEND FILES**

assets - 
    css
    images

components -
    administrator (adminDashboard, userDetails, userReports, viewAdminList, viewStudentList)
    footer
    header
    notesManagement (addNote, deleteNote, updateNote, viewNotes)
    userManagement (login, register, forgotPW, resetPW)

App.js file
index.html file
gitignore file

**IMPLEMENTATION**

* Create the new account (Registration)
* Login to the application
* If userType == Student, then automatically navigate to the View notes page.
* If userType == Administrator, then automatically navigate to the admin Dashboard page.
* If user forgot his/her password they can reset it using reset PW interface.

**IMPLEMENTATION - STUDENT TASKS**

* View all the added notes
* Create new notes
* Upate Note
* Delete Note

**IMPLEMENTATION - ADMIN TASKS**

* View all the user details
* Download the user details as PDF
* Search user by email address
* View all the student details
* View all the administrator details
* View user report details
* Download the user report details as PDF