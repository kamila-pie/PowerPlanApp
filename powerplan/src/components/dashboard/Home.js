import React from "react";
import '../../scss/main.scss';




const Home = () => {

    return (
        <div className="home">
            {/*<h1>Get your power with us</h1>*/}
            {/*<h3> Just login or register to getting started</h3>*/}
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">

                            <h1 className="header center teal-text text-lighten-2">Get your power with us</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">Just login or register to getting started</h5>
                            </div>
                            <div className="row center">
                                <a href="/register" id="download-button"
                                   className="btn-large waves-effect waves-light teal lighten-1">Get Started</a>
                            </div>
                </div>
                <div className="parallax"><img src="../../images/pexels-victor-freitas-703016.jpg" alt="Unsplashed background img 1"/></div>
            </div>

            <div className="container">
                <div className="section">

                    {/*// --   Icon Section   -->*/}
                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Speeds up development</h5>

                                <p className="light">We did most of the heavy lifting for you to provide a default
                                    stylings that incorporate our custom components. Additionally, we refined animations
                                    and transitions to provide a smoother experience for developers.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">User Experience Focused</h5>

                                <p className="light">By utilizing elements and principles of Material Design, we were
                                    able to create a framework that incorporates components and animations that provide
                                    more feedback to users. Additionally, a single underlying responsive system across
                                    all platforms allow for a more unified user experience.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">We have provided detailed documentation as well as specific code
                                    examples to help new users get started. We are also always open to feedback and can
                                    answer any questions a user may have about Materialize.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on
                                Material Design</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="../../images/pexels-andrea-piacquadio-3757376.jpg" alt="Unsplashed background img 2"/></div>
            </div>

            <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Contact </h4>
                            <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                consequat magna fermentum ac. Cras ut ultricies eros.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on
                                Material Design</h5>
                        </div>
                    </div>
                </div>
                <div className="parallax"><img src="background3.jpg" alt="Unsplashed background img 3"/></div>
            </div>
            <footer className="page-footer teal">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Bio</h5>
                            <p className="grey-text text-lighten-4">I'm a CL student working on this
                                project like it's best way to learn on own struggles. I want to continue learning and also
                                development this project. Looking for full time job as full time Junior JavaScript Developer.</p>
                        </div>

                        <div className="col l3 s12">
                            <h5 className="white-text">Connect</h5>
                            <ul>
                                <li><a className="white-text" href="https://www.linkedin.com/in/kamila-pietraszuk/">My LinkedIn</a></li>
                                <li><a className="white-text" href="https://github.com/kamila-pie">My GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Made by <a className="madeBy brown-text text-lighten-3"
                                   href="https://github.com/kamila-pie"> Kamila Pietraszuk</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home;