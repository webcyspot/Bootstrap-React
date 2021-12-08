import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
 
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__slider owl-carousel">
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>

    <section className="about spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="about__text">
                        <div className="section-title">
                            <span>our belief</span>
                            <h2>baking over everything!</h2>
                        </div>
                        <p>we pride our success on invention and consistence.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="about__bar">
                        <div className="about__bar__item">
                            <p>Cake recipes</p>
                            <div id="bar1" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="95"></span>
                            </div>
                        </div>
                        <div className="about__bar__item">
                            <p>Customer service</p>
                            <div id="bar2" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="80"></span>
                            </div>
                        </div>
                        <div className="about__bar__item">
                            <p>customer satisfaction</p>
                            <div id="bar3" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="90"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="categories">
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-029-cupcake-3"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-034-chocolate-roll"></span>
                            <h5>Butter</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-005-pancake"></span>
                            <h5>Red Velvet</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-030-cupcake-2"></span>
                            <h5>Biscuit</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Donut</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-1.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Dozen Cupcakes</a></h6>
                            <div className="product__item__price">£32.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-2.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Cookies and Cream</a></h6>
                            <div className="product__item__price">£30.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-3.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Gluten Free Mini Dozen</a></h6>
                            <div className="product__item__price">£31.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-4.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Cookie Dough</a></h6>
                            <div className="product__item__price">£25.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-5.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Vanilla Salted Caramel</a></h6>
                            <div className="product__item__price">£05.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-6.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">German Chocolate</a></h6>
                            <div className="product__item__price">£14.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-7.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Dulce De Leche</a></h6>
                            <div className="product__item__price">£32.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-8.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Mississippi Mud</a></h6>
                            <div className="product__item__price">£08.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="self spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="class__form">
                        <div className="section-title">
                            <span>class cakes</span>
                            <h2>Made from your <br />own hands</h2>
                        </div>
                        <form action="#">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone" />
                            <select>
                                <option value="">Studying class</option>
                                <option value="">Writting class</option>
                                <option value="">Reading class</option>
                            </select>
                            <input type="text" placeholder="Type your requirements" />
                            <button type="submit" className="site-btn">registration</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="class__video set-bg" data-setbg="img/class-video.jpg">
                <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1" className="play-btn video-popup"><i className="fa fa-play"></i></a>
            </div>
        </div>
    </section>

    <section className="testimonial spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-title">
                        <span>Testimonial</span>
                        <h2>Our client say</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="testimonial__slider owl-carousel">
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>K M</h5>
                                    <span>Peterborough</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>K E M</h5>
                                    <span>Huntingdon</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again..</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>P H</h5>
                                    <span>London</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again..</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>S R</h5>
                                    <span>Ely</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>J K</h5>
                                    <span>London</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again..</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial__item">
                            <div className="testimonial__author">
                                <div className="testimonial__author__pic">
                                    <img src="img/testimonial/ta-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial__author__text">
                                    <h5>S S S</h5>
                                    <span>Fletton</span>
                                </div>
                            </div>
                            <div className="rating">
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star"></span>
                                <span className="icon_star-half_alt"></span>
                            </div>
                            <p>Good and i will ouse them again..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 p-0">
                    <div className="instagram__text">
                        <div className="section-title">
                            <span>Follow us on instagram</span>
                            <h2>Sweet moments are saved as memories.</h2>
                        </div>
                        <h5><i className="fa fa-instagram"></i> @get-baking</h5>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/instagram-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="img/instagram/instagram-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/instagram-3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/instagram-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="img/instagram/instagram-5.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/instagram-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


 <iframe width="3000" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=PE2%208HZ&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href=""></a><br/><style></style><a href="https://www.embedgooglemap.net"></a>

   

      <Footer />
    </>
  );
}

export default Home;
