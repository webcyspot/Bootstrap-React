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


function Contact() {
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
        <section class="contact spad">
            <div class="container">
                <div class="map">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 col-md-7">
                            
                            </div>
                        </div>
                    </div>
                    <div class="map__iframe">
                        <iframe width="3000" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=PE2%208HZ&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href=""></a><br/><a href="https://www.embedgooglemap.net"></a></div>
                </div>
                <div class="contact__address">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="contact__address__item">
                                <h6>Peterborough</h6>
                                <ul>
                                    <li>
                                        <span class="icon_pin_alt"></span>
                                        <p>33 Peterborough lane</p>
                                    </li>
                                    <li><span class="icon_headphones"></span>
                                        <p>123457888</p>
                                    </li>
                                    <li><span class="icon_mail_alt"></span>
                                        <p>get-baking@support.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="contact__address__item">
                                <h6>Peterborough</h6>
                                <ul>
                                    <li>
                                        <span class="icon_pin_alt"></span>
                                        <p>33 Peterborough lane</p>
                                    </li>
                                    <li><span class="icon_headphones"></span>
                                        <p>123457888</p>
                                    </li>
                                    <li><span class="icon_mail_alt"></span>
                                        <p>get-baking@support.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="contact__address__item">
                                <h6>Peterborough</h6>
                                <ul>
                                    <li>
                                        <span class="icon_pin_alt"></span>
                                        <p>33 Peterborough lane</p>
                                    </li>
                                    <li><span class="icon_headphones"></span>
                                        <p>123457888</p>
                                    </li>
                                    <li><span class="icon_mail_alt"></span>
                                        <p>get-baking@support.com</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact__text">
                            <h3>Contact us</h3>
                            <ul>
                                <li>support store opening time:</li>
                                <li>Mon-Fri: 5:00am to 9:00pm</li>
                                <li>Sat-Sun: 6:00am to 9:00pm</li>
                            </ul>
                            <img src="img/cake1.jpg" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="contact__form">
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div class="col-lg-12">
                                        <textarea placeholder="Message"></textarea>
                                        <button type="submit" class="site-btn">Send Us</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer />
    </>
  );
}

export default Contact;
