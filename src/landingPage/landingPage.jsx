import Logo from "../assets/general/img.png"
import Search from "../assets/general/img_1.png"
import Cart from "../assets/general/img_2.png"
import Plate from "../assets/general/plate.png"
import MessageIcon from "../assets/general/messageIcon.png"
import Jollof from "../assets/food imgaes/jollofRice.png"
import Okra from "../assets/food imgaes/okra.png"
import Chips from "../assets/food imgaes/chips.png"
import Egwusi from "../assets/food imgaes/egwusi.png"
import Beans from "../assets/food imgaes/beans.png"
import FriedRice from "../assets/food imgaes/friedRice.png"
import "./landingPage.scss"
import Card from "../card component/cardComponent";
import Quote from "../assets/svg/quote.svg"
import Fade from "../carousel component/carousel";
import BlogCards from "../blog cards/blogCards";
import Facebook from "../assets/social Icons/facebook.png"
import Instagram from "../assets/social Icons/instagram.png"
import Twitter from "../assets/social Icons/twitter.png"
import Home from "../assets/mobile icon/home.png"
import MealPlans from "../assets/mobile icon/mealPlans.png"
import Store from "../assets/mobile icon/store.png"

export default function LandingPage(){
    return(
        <>
            <header>
                <nav>
                    <div className={"nav-div margin"}>
                        <div className={"first-nav"}>
                            <div className={"logo"}>
                                <img src={Logo} className={"logoImg"}/>
                                <h1>Meals</h1>
                            </div>

                            <ul className={"list"}>
                                <li className={"current"}><img src={Home}/>Home</li>
                                <li><img src={Store}/>Menu</li>
                                <li><img src={MealPlans}/>Meal Plans</li>
                                <li><img src={Cart}/>My tray</li>
                            </ul>
                        </div>


                        <div className={"second-nav"}>
                            <div className={"icon-div"}>
                                <img src={Search} className={"icon search"}/>
                                <img src={Cart} className={"icon"}/>
                            </div>
                            <div className={"hamburger"}>
                                <h1>☰</h1>
                            </div>
                            <p className={"sign-in"}>Sign In</p>
                            <button>Create Account</button>
                        </div>
                    </div>
                </nav>

                <div className={"landing margin"}>
                    <div>
                        <h2>Delicious meals at your convenience</h2>
                        <p>Order your meals from us and we'll have it delivered
                            at your door step
                        </p>
                        <button className={"getStarted"}>Get started</button>

                        <div className={"search-div"}>
                            <p>Instant Order</p>
                            <input type={"search"} placeholder={'search for meals...'}/>
                        </div>
                    </div>
                    <div className={"imageContainer"}>
                        <div className={"landingImg"}>
                            <img src={Plate} />
                        </div>
                        <img src={MessageIcon} className={"messageIcon"}/>
                    </div>
                </div>
            </header>

            <main>
                <section>
                    <div className={"margin"}>
                        <h4>MENU</h4>
                        <div className={"foodSection"}>
                            <h3>Current menu</h3>
                            <ul>
                                <li>All</li>
                                <li>Rice</li>
                                <li>Beans</li>
                                <li>Fries</li>
                                <li>Swallow</li>
                                <li>Others</li>
                            </ul>
                        </div>

                        <div className={"cardShow"}>
                            <Card
                                image={Okra}
                                title={"Swallow with Draw Soup"}
                                description={"Swallow with Draw Soup"}
                                price={"₦ 1,500"}
                            />

                            <Card
                                image={Jollof}
                                title={"Jollof Rice and Chicken"}
                                description={"Fried potato/yam chips with egg sauce or any topping of your choice"}
                                price={"₦ 1000"}
                            />
                            <Card
                                image={Chips}
                                title={"Fries with Egg sauce"}
                                description={"Fried potato/yam chips with egg sauce or any topping of your choice"}
                                price={"₦ 1,500"}
                            />
                            <Card
                                image={Egwusi}
                                title={"Swallow with Egusi Soup"}
                                description={"Nicely cooked egusi soup and eba"}
                                price={"₦ 1000"}
                            />

                            <Card
                                image={Beans}
                                title={"Beans"}
                                description={"Nicely cooked beans soup and fired plantain"}
                                price={"₦ 700"}
                            />
                            <Card
                                image={FriedRice}
                                title={"Fried Rice"}
                                description={"Fried potato/yam chips with egg sauce or any topping of your choice"}
                                price={"₦ 600"}
                            />

                        </div>
                        <div className={"fullMenu"}>
                            <button >Full Menu</button>
                        </div>

                    </div>
                </section>

                <section id={"testimonial"}>
                    <div className={"margin testimonial"}>
                        <div>
                            <h3>What our customers say about us</h3>
                            <p>When your services are great, <br/> you should get a nice feedback.
                                <br/>We love feedback.
                            </p>
                        </div>

                        <div className={"carousel"}>
                            <img src={Quote} className={"quote"}/>
                            <Fade/>
                        </div>
                    </div>

                </section>

                <section id={"blog"}>
                    <div className={"blog-header"}>
                        <h3>Blog Our Latest News</h3>
                        <p>Have you browsed food blogs like mine and wondered how to start a food blog of your very own?</p>
                    </div>


                    <div className={"blog-cards"}>
                        <BlogCards/>
                    </div>
                </section>
            </main>

            <footer>
                <div className={"margin footer"}>

                    <div className={"footer-logo"}>
                        <img src={Logo}/>
                        <h1>Meals</h1>
                    </div>

                    <div className={"footer-details"}>
                        <div className={"footer-info"}>
                            <p>Company</p>
                            <p>Blog</p>
                            <p>About us</p>
                            <p>Contact us</p>
                        </div>
                        <div className={"footer-info"}>
                            <p>Services</p>
                            <p>FAQs</p>
                            <p>Our Menu</p>
                        </div>
                    </div>
                </div>
                <div className={"fade_rule"}></div>
                <div className={"socials margin"}>
                    <p> ⓒ 2022 Meals. All rights reserved.</p>
                    <div className={"social-icons"}>
                        <a href={"facebook.com"}><img src={Facebook}/></a>
                        <a href={"instagram.com"}><img src={Instagram}/></a>
                        <a href={"twitter.com"}><img src={Twitter}/></a>
                    </div>
                </div>
            </footer>



        </>
    )
}