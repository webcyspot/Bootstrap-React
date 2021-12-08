import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Checkout from '../Checkout';
import styled from "styled-components";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
// import api from '../../services/api';

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;


function About() {
  const [products, setProducts] = useState([]);
  const [isOpen, toggle] = useState(false);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );
  function handlOpenModal(open) {
    toggle(open);
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
//      const response = await api.get('products');

//      const data = response.data.map(product => ({
  const pro_article = [{id: 1, title: 'First',discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 160, color: '#54d4c9', image: './assets/img/almond.jpg'}
      ,{id: 2, title: 'Rosy-Fingered Dawn at Louse Point', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 89.97, color: '#fd584a', image: './assets/img/irises.jpg'}
      ,{id: 3, title: 'Irises', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 71.97, color: '#d4d7d6', image: './assets/img/painting.jpg'}
      ,{id: 4, title: 'Branches with Almond Blossom', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 89.97, color: '#4d317f', image: './assets/img/rosy.jpg'}
      ,{id: 5, title: 'Branches with Almond Blossom', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 187.97, color: '#3569a1', image: './assets/img/starry-night.jpg'}]

      const data = pro_article.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
   handlOpenModal(true)

  }



  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );



  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }



  return (
    <>
      <Header />
        <div className="breadcrumb-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="breadcrumb__text">
                            <h2>About</h2>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>

        <section className="about spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about__video set-bg" data-setbg="img/about-video.jpg">
                            <a href="https://www.youtube.com/watch?v=8PJ3_p7VqHw&list=RD8PJ3_p7VqHw&start_radio=1"
                            className="play-btn video-popup"><i className="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="about__text">
                            <div className="section-title">
                                <span>About Cake recipes</span>
                                <h2>Cakes recipes and bakes done by our own staff!</h2>
                            </div>
                            <p>Get baking is an online recipe website with a shop which has existed for over 20 years.Our story began back in May 2013. Joe and his good friend Anna had been lift sharing to work for a few months, and on a journey on the M3 the conversation moved onto the subject of baking. They both loved to cook and had the idea of a time saving baking kit<br/> that still gave the full baking from scratch experience but with a little less hassle – and so the Baked In baking kit was born. Joined by their friend Elaina, a plan was hatched to test their idea. A school fete, artisan market and food festival later and it was clear people loved the idea.

                                Not long after, they picked up their first stockist and launched an additional product range – mug baking mixes. The business grew steadily, but working a demanding day job and spending evenings and weekends working on the business meant that a crossroads was soon reached. After raising a round of seed investment, <br/>Joe quit his day job to manage the business full time, hired his first employees and the rest is history. In 2016 his brother, Patrick, joined Baked In and now they both lead the business together.
                                
                                Today our products are sold in thousands of shops and online retailers in the UK, Europe and North America including Tesco, Lakeland, Ocado, Hobbycraft, QVC and Moonpig. Their Baking Club subscription service was named in the Independents top 15 food subscriptions two years running, alongside brands such as Graze, HelloFresh and Hotel Chocolat.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="about__bar">
                            <div className="about__bar__item">
                                <p>Cake design</p>
                                <div id="bar1" className="barfiller">
                                    <div className="tipWrap"><span className="tip"></span></div>
                                    <span className="fill" data-percentage="95"></span>
                                </div>
                            </div>
                            <div className="about__bar__item">
                                <p>Cake className</p>
                                <div id="bar2" className="barfiller">
                                    <div className="tipWrap"><span className="tip"></span></div>
                                    <span className="fill" data-percentage="80"></span>
                                </div>
                            </div>
                            <div className="about__bar__item">
                                <p>Cake Recipes</p>
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

      <Footer />
    </>
  );
}

export default About;
