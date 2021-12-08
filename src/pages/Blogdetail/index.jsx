import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Blogdetail() {
 
  return (
    <>
      <Header />
      <div className="blog-hero set-bg" data-setbg="img/blog/details/baking5.jpg">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-7">
                    <div className="blog__hero__text">
                        <div className="label">Recipes</div>
                        <h2>Buttering cake recipe</h2>
                        <ul>
                            <li>By <span>medd</span></li>
                             </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="blog-details spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="blog__details__content">
                        <div className="blog__details__share">
                            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" className="youtube"><i className="fa fa-youtube-play"></i></a>
                            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                        <div className="blog__details__text">
                            <p>First thing's first, since making and decorating a cake can be quite a bit of work,<br/>
                                 it's not a bad idea to split the job into stages. <br/>
                                For example, bake it on a Monday and freeze it, then take it out and decorate it on Friday..</p>
                            <p>Why is port formation important? Several reasons. If the hole is punched into a sheet
                                metal burner, it leaves a large tab inside the burner that will caus e more chaos while
                                burning. It is more apt to hold trapped food particles and grease, and is therefore more
                            likely to burn through. (Note the Alfresco burner photo below.</p>
                        </div>
                        <div className="blog__details__recipe">
                            <div className="blog__details__recipe__item">
                                <h6><img src="img/blog/details/user.png" alt=""/> SERVES</h6>
                                <span>2 as a main, 4 as a side</span>
                            </div>
                            <div className="blog__details__recipe__item">
                                <h6><img src="img/blog/details/clock.png" alt=""/> PREP TIME</h6>
                                <span>15 minute</span>
                            </div>
                            <div className="blog__details__recipe__item">
                                <h6><img src="img/blog/details/clock.png" alt=""/> COOK TIME</h6>
                                <span>15 minute</span>
                            </div>
                        </div>
                        <div className="blog__details__recipe__details">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="blog__details__ingredients">
                                        <h6>Ingredients</h6>
                                        <ul>
                                            <li><span>.</span> 1 cup (240 ml) whole milk</li>
                                            <li><span>.</span> 1 cup (240 ml) water, plus more as needed</li>
                                            <li><span>.</span> 1 teaspoon fine sea salt</li>
                                            <li><span>.</span> 2 tablespoons olive oil</li>
                                            <li><span>.</span> 3/4 cup (120 g) fine polenta</li>
                                            <li><span>.</span> 3 cups sunflower oil, plus more as needed</li>
                                            <li><span>.</span> 7 ounces (200 g) peeled parsnips,</li>
                                            <li><span>.</span> 1 pinch fine sea salt, plus more to taste</li>
                                            <li><span>.</span> 2 tablespoons (30 g) unsalted butter</li>
                                            <li><span>.</span> 1/2 tablespoon maple syrup</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="blog__details__ingredients__pic">
                                        <img src="img/blog/details/blog-details.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details__direction">
                            <h6>Directions</h6>
                            <ul>
                                <li><span>01.</span> Combine all of the ingredients, kneading to form a smooth dough.
                                </li>
                                <li><span>02.</span> Allow the dough to rise, in a lightly greased, covered bowl, until
                                it’s doubled in size,</li>
                                <li><span>03.</span> about 90 minutes.</li>
                                <li><span>04.</span> Gently divide the dough in half; it’ll deflate somewhat. Gently
                                    shape the dough into two oval loaves; or, for longer loaves, two 10″ to 11″ logs.
                                </li>
                                <li><span>05.</span> Place the loaves on a lightly greased or parchment-lined baking
                                sheet. Cover and let</li>
                                <li><span>06.</span> rise until very puffy, about 1 hour. Towards the end of the rising
                                time, preheat the oven</li>
                                <li><span>07.</span> to 425°F.</li>
                                <li><span>08.</span> Spray the loaves with lukewarm water. Make two fairly deep diagonal
                                slashes in each; a serrated bread knife, wielded firmly,</li>
                            </ul>
                        </div>
                        <div className="blog__details__print">
                            <a href="#" className="primary-btn"><i className="fa fa-print"></i> Print recipe</a>
                        </div>
                        <div className="blog__details__text">
                            <p>Molded ports in cast burners seem like they would be a good idea, but there is
                                considerable difficulty in making them uniform. Thus, it is quicker and less expensive
                            to drill.</p>
                            <p>Fire Magic grill burner has drilled orifices Notice (from the photo on our site) the lack
                                of extensive burring, allowing for a smooth flow of gas. Cast stainless leaves few, if
                                any, burrs when drilled. This burner has a lifetime warranty, including against rust and
                            burn-through.</p>
                        </div>
                        <div className="blog__details__tags">
                            <span></span>
                            
                        </div>
                        <div className="blog__details__btns">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__details__btns__item">
                                        <a href="/blogdetail"><span className="arrow_carrot-left"></span> Previous posts</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__details__btns__item blog__details__btns__item--next">
                                        <a href="/blogdetail">Next posts <span className="arrow_carrot-right"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog__details__author">
                            <div className="blog__details__author__pic">
                                <img src="img/blog/details/blog-author.jpg" alt=""/>
                            </div>
                            <div className="blog__details__author__text">
                                <h6>follow the author </h6>
                                <div className="blog__details__author__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                </div>
                                <p>Always a pleasure experiencing my ideas to the world.<br/>
                                please follow me on my platforms</p>
                            </div>
                        </div>
                        <div className="blog__details__comment">
                            <h5>3 Comments</h5>
                            <a href="#" className="primary-btn">Leave a comment</a>
                            <div className="blog__details__comment__item">
                                <div className="blog__details__comment__item__pic">
                                    <img src="img/blog/details/comment-1.jpg" alt=""/>
                                </div>
                                <div className="blog__details__comment__item__text">
                                    <h6>baby jo</h6>
                                    <p>nice work will definetly try it out.</p>
                                    <div className="blog__details__comment__btns">
                                        <a href="#">Reply</a>
                                        <a href="#">Like</a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__comment__item blog__details__comment__item--reply">
                                <div className="blog__details__comment__item__pic">
                                    <img src="img/blog/details/comment-2.jpg" alt=""/>
                                </div>
                                <div className="blog__details__comment__item__text">
                                    <h6>ghost</h6>
                                   <p>best of the best my guy keep it up.</p>
                                    <div className="blog__details__comment__btns">
                                        <a href="#">Reply</a>
                                        <a href="#">Like</a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog__details__comment__item">
                                <div className="blog__details__comment__item__pic">
                                    <img src="img/blog/details/comment-3.jpg" alt=""/>
                                </div>
                                <div className="blog__details__comment__item__text">
                                    <h6>james</h6>
                                    <p>best of the best my guy keep it up.</p>
                                    <div className="blog__details__comment__btns">
                                        <a href="#">Reply</a>
                                        <a href="#">Like</a>
                                    </div>
                                </div>
                            </div>
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

export default Blogdetail;
