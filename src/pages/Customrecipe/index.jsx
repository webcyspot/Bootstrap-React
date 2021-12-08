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


function Customrecipe() {
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
      <div className="container-fluid">
        <div className="row">
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/instagram-5.jpg" alt="400"/>

                    </div>
                    <div className="dropdown">
                        <button onClick="myFunction()" className="dropbtn">INGREDIENT ONE</button>
                        <div id="myDropdown" className="dropdown-content">
                            <input type="text" placeholder="Search.." id="myInput" onKeyUp="filterFunction()"/>
                            <a href="#about">About</a>
                            <a href="#base">Base</a>
                            <a href="#blog">Blog</a>
                            <a href="#contact">Contact</a>
                            <a href="#custom">Custom</a>
                            <a href="#support">Support</a>
                            <a href="#tools">Tools</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/instagram-2.jpg" alt="800"/>
                    </div>
                    <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">INGREDIENT TWO</button>
                        <div id="myDropdown" className="dropdown-content">
                            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
                            <a href="#">cookies</a>
                            <a href="#">eggs</a>
                            <a href="#">cinamon</a>
                            <a href="#">bread</a>
                            <a href="#">tea</a>
                            <a href="#">ice</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/instagram-1.jpg" alt="400"/>
                    </div>
                    <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">INGREDIENT THREE</button>
                        <div id="myDropdown" className="dropdown-content">
                            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
                            <a href="#">eggs</a>
                            <a href="#">cinamon</a>
                            <a href="#">bread</a>
                            <a href="#">tea</a>
                            <a href="#">ice</a>
                            <a href="#">cookies</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-sm-3">
                <div className="thumbnail">
                    <div className="img-wrapper">
                        <img src="img/instagram/instagram-3.jpg" alt="800" />
                    </div>
                    <div className="dropdown">
                        <button onclick="myFunction()" className="dropbtn">INGREDIENT FOUR</button>
                        <div id="myDropdown" className="dropdown-content">
                            <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
                            <a href="#">eggs</a>
                            <a href="#">bread</a>
                            <a href="#">ice</a>
                            <a href="#">tea</a>
                            <a href="#">cookies</a>
                            <a href="#">cinamon</a>

                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="block"><a href="/shop">Contact</a></button>
        </div>
    </div>
      
      <Footer />
    </>
  );
}

export default Customrecipe;
