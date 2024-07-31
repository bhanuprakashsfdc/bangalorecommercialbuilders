import React from 'react'

const Header = () => {
  return (
    <div>
          <div id="header-fixed-height"></div>
    <header class="header-area-one" id="sticky-header">
        <nav class="navbar navbar-expand-lg d-none d-lg-block">
            <div class="container-fluid">
                <a class="navbar-brand me-0" href="index.html">
                    <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home <i
                                    class="fas fa-chevron-down"></i></a>
                            <ul class="list-unstyled sub-menu">
                                <li><a href="index.html">Home One</a></li>
                                <li><a href="index-2.html">Home Two</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about-us.html">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services <i class="fas fa-chevron-down"></i></a>
                            <ul class="list-unstyled sub-menu">
                                <li><a href="services.html">Service Single</a></li>
                                <li><a href="service-details.html">Service Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects <i class="fas fa-chevron-down"></i></a>
                            <ul class="list-unstyled sub-menu">
                                <li><a href="project.html">Project</a></li>
                                <li><a href="project-details.html">Project Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog <i class="fas fa-chevron-down"></i></a>
                            <ul class="list-unstyled sub-menu">
                                <li><a href="blog-classic.html">Blog Classic</a></li>
                                <li><a href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Page <i class="fas fa-chevron-down"></i></a>
                            <ul class="list-unstyled sub-menu">
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Single</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <div class="header-right-info d-flex align-items-center">
                        <div class="social">
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div class="help-number d-flex align-items-center">
                            <div class="icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="info">
                                <p>Need help?</p>
                                <h6>
                                    <a href="tel:(808)555-0111">
                                        (808) 555-0111
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="mobile-menu-area d-block d-lg-none">
            <div class="mobile-topbar">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="logo">
                            <img src="assets/img/logo/logo.png" alt="logo" />
                        </div>
                        <div class="bars">
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu-overlay"></div>
            <div class="mobile-menu-main">
                <div class="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="logo"/>
                    </a>
                </div>
                <div class="close-mobile-menu"><i class="fas fa-times"></i></div>
                <div class="menu-body">
                    <div class="menu-list">
                        <ul class="list-unstyled">
                            <li class="sub-mobile-menu">
                                <a href="#">Home <i class="fas fa-chevron-down float-end"></i></a>
                                <ul class="list-unstyled">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index-2.html">Home Two</a></li>
                                </ul>
                            </li>
                            <li class="sub-mobile-menu">
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li class="sub-mobile-menu">
                                <a href="#">Services <i class="fas fa-chevron-down float-end"></i></a>
                                <ul class="list-unstyled">
                                    <li><a href="services.html">Service Single</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                </ul>
                            </li>
                            <li class="sub-mobile-menu">
                                <a href="#">Projects <i class="fas fa-chevron-down float-end"></i></a>
                                <ul class="list-unstyled">
                                    <li><a href="project.html">Projects</a></li>
                                    <li><a href="project-details.html">Project Details</a></li>
                                </ul>
                            </li>
                            <li class="sub-mobile-menu">
                                <a href="#">Blog <i class="fas fa-chevron-down float-end"></i></a>
                                <ul class="list-unstyled">
                                    <li><a href="blog-classic.html">Blog Classic</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li class="sub-mobile-menu"><a href="#">Page <i
                                        class="fas fa-chevron-down float-end"></i></a>
                                <ul class="list-unstyled">
                                    <li><a href="team.html">team</a></li>
                                    <li><a href="team-details.html">Team Single</a></li>
                                </ul>
                            </li>
                            <li class="sub-mobile-menu">
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="social-icon">
                    <ul class="list-unstyled">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
