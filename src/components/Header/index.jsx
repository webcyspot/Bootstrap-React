import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';

function Header() {

  return (
    <Container>
       
      <div id="preloder">
          <div className="loader"></div>
      </div>

      <header className="header">
          <div className="header__top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="header__top__inner">
                              <div className="header__top__left">
                              
                              </div>
                              <div className="header__logo">
                                  <a href="/"><img src="img/cake logo.png" alt=""/></a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="canvas__open"><i className="fa fa-bars"></i></div>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <nav className="header__menu mobile-menu">
                          <ul>
                              <li className="active"><a href="/">Home</a></li>
                              <li><a href="/about">About</a></li>
                              <li><a href="/shop">Shop</a></li>
                              
                              <li><a href="/blog">Blog</a></li>
                              <li><a href="/customrecipe">Custom Recipe</a></li>
                              <li><a href="/contact">Contact</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
  
      
    </Container>
  );
}
export default Header;
