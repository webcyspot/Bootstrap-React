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


function Shop() {
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
                            <h2>Shop</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="breadcrumb__links">
                            <a href="/">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="shop spad">
            <div className="container">
                <div className="shop__option">
                    <div className="row">
                        <div className="col-lg-7 col-md-7">
                            <div className="shop__option__search">
                                <form action="/blogdetail">
                                    <select>
                                        <option value="">Categories</option>
                                        <option value="">Red Velvet</option>
                                        <option value="">Cup Cake</option>
                                        <option value="">Biscuit</option>
                                    </select>
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="shop__option__right">
                                <select>
                                    <option value="">Default sorting</option>
                                    <option value="">A to Z</option>
                                    <option value="">1 - 8</option>
                                    <option value="">Name</option>
                                </select>
                                <a href="#"><i className="fa fa-list"></i></a>
                                <a href="#"><i className="fa fa-reorder"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-1.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">banana recipe</a></h6>
                                <div className="product__item__price">£2.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-2.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Cream</a></h6>
                                <div className="product__item__price">£30.00</div>
                                <div className="cart_add">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-3.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Gluten Free</a></h6>
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
                                </div>
                            <div className="product__item__text">
                                <h6><a href="#">Cookie receipe</a></h6>
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
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">Dulce</a></h6>
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
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#"> Mud</a></h6>
                                <div className="product__item__price">£08.00</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-9.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">VEGAN</a></h6>
                                <div className="product__item__price">£98.85</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-10.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">SWEET CELTICS</a></h6>
                                <div className="product__item__price">£5.77</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-11.jpg">
                                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">SWEET </a></h6>
                                <div className="product__item__price">£26.41</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/shop/product-12.jpg">
                
                            </div>
                            <div className="product__item__text">
                                <h6><a href="#">PALE YELLOW SWEET</a></h6>
                                <div className="product__item__price">£22.47</div>
                                <div className="cart_add">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shop__last__option">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="shop__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><span className="arrow_carrot-right"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="shop__last__text">
                                <p>Showing 1-9 of 10 results</p>
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

export default Shop;
