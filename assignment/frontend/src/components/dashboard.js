 import React, { Component } from 'react'
 import '../assets/css/dashboard.css';
 import '../assets/css/nucleo-icons.css';
 import '../assets/css/nucleo-svg.css';
 
 export default class dashboard extends Component {
     render() {
         return (
             <div>
                 <body class="">
                     {/* <!-- Navbar --> */}
                     <nav class="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
                         <div class="container">
                             {/* <a class="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" href="../pages/dashboard.html">
                                 UI Builder
                             </a> */}
                             <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                 <span class="navbar-toggler-icon mt-2">
                                     <span class="navbar-toggler-bar bar1"></span>
                                     <span class="navbar-toggler-bar bar2"></span>
                                     <span class="navbar-toggler-bar bar3"></span>
                                 </span>
                             </button>
                             <div class="collapse navbar-collapse" id="navigation">
                                 <ul class="navbar-nav mx-auto">
                                     <li class="nav-item">
                                         <a class="nav-link me-2" href="">
                                             <i class="fa fa-chart-pie opacity-6  me-1"></i>
                                             UI Template Generator
                                         </a>
                                     </li>
                                     <li class="nav-item">
                                         <a class="nav-link me-2" href="/convertXmltoJson">
                                             <i class="fa fa-chart-pie opacity-6  me-1"></i>
                                             Web Frontend Generator
                                         </a>
                                     </li>
                                     <li class="nav-item">
                                         <a class="nav-link me-2" href="">
                                             <i class="fa fa-chart-pie opacity-6  me-1"></i>
                                             Mobile Frontend Generator
                                         </a>
                                     </li>
                                     <li class="nav-item">
                                         <a class="nav-link me-2" href="">
                                             <i class="fa fa-chart-pie opacity-6  me-1"></i>
                                             Backend Generator
                                         </a>
                                     </li>
                                 </ul>
                                 <ul class="navbar-nav d-lg-block d-none">
                                     <li class="nav-item">
                                         <a href=" " class="btn btn-sm mb-0 me-1 bg-gradient-light">Sign Up</a>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </nav>
                     {/* <!-- End Navbar --> */}
                     <main class="main-content  mt-0">
                         <div class="page-header align-items-start min-vh-100 pt-5 pb-11 m-3 border-radius-lg" style={{
                             backgroundImage: `url("https://www.innovasolutions.com/wp-content/uploads/2020/11/background-hd-12.jpg")`
                         }}>
                             <span class="mask bg-gradient-dark opacity-6"></span>
                             <div class="container">
                                 <div class="row justify-content-center">
                                     <div class="col-lg-5 text-center mx-auto">
                                         <h1 class="text-white mb-2 mt-5" style={{ color: 'white', fontSize: '70px' }}>NOTES MANAGEMENT</h1>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </main>
                     {/* <!-- -------- FOOTER ------- --> */}
                     <footer class="footer py-5">
                         <div class="container">
                             <div class="row">
                                 <div class="col-8 mx-auto text-center mt-1">
                                     <p class="mb-0 text-secondary">
                                         Copyright © <script>
                                             document.write(new Date().getFullYear())
                                         </script> SLIIT Research Project Team
                                     </p>
                                 </div>
                             </div>
                         </div>
                     </footer>
                 </body>
             </div>
         )
     }
 }