import React from 'react';

function Footer() {
    return (
            <div>
                     <footer className="footer set-bg" data-setbg="img/footer-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget">
                                        <h6>CUSTOMER SERVICE WORKING HOURS</h6>
                                        <ul>
                                            <li>Monday - Friday: 08:00 am – 08:30 pm</li>
                                            <li>Saturday: 10:00 am – 16:30 pm</li>
                                            <li>Sunday: 10:00 am – 16:30 pm</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__about">
                                        <div className="footer__logo">
                                            <a href="#"><img src="img/cake logo.png" alt=""/></a>
                                        </div>
                                        <p>follow us on.</p>
                                        <div className="footer__social">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-instagram"></i></a>
                                            <a href="#"><i className="fa fa-youtube-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__newslatter">
                                        <h6>Subscribe</h6>
                                        <p>Get latest updates and offers.</p>
                                        <form action="#">
                                            <input type="text" placeholder="Email"/>
                                            <button type="submit"><i className="fa fa-send-o"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                    
                                </div>
                                <div className="col-lg-5">
                                    <div className="copyright__widget">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        );
    }
    
export default Footer;
    