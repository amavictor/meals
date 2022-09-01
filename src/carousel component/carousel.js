import "./carousel.scss"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import African from"../assets/carousel images/african-girl.jpg"
import Man from"../assets/carousel images/man.jpg"
import WhiteGirl from"../assets/carousel images/white-girl.jpg"



const details = [
    {
        name: "Ada",
        src: African,
        location:"Enugu, Nigeria",
        comment: "I really love Meals. The process is smooth and nice" +
            "and the staff, delivery man and everybody is so nice. Meals is the best"
    },
    {
        name:"Ben",
        src:Man,
        location: "Lagos, Nigeria",
        comment: "Its the online orders for me. Stunning interface and amazing customer service." +
            "I really think they should be rated the best food delivery guys."
    },
    {
        name:"Sandra",
        src:WhiteGirl,
        location: "Abuja, Nigeria",
        comment: "Well, its just awesome. Nothing less. Thats all I can say. There's nothing and no one better " +
            "than Meals. They're simply amazing."
    }

]


export default class Fade extends Component {

    render() {
        const settings = {
            arrows:false,
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "slider",
            autoplay:true,
            autoplaySpeed:1500,
            cssEase:"linear",
            nextArrow:null,
            prevArrow:null
        };
        return (
            <div>
                <Slider {...settings}>
                    {details.map((item)=>{
                        return(
                            <CarouselLayout img={item.src} name={item.name} comment={item.comment} location={item.location}/>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

function CarouselLayout({img,name,comment,location}){
    return(
        <>
            <div className={"carousel-details"}>
                <div className={"details"}>
                    <img src={img}/>
                    <p className={"name"}>{name}</p>
                    <p>{location}</p>
                </div>
                <div className={"comment"}>
                    <p>{comment}</p>
                </div>

            </div>

        </>

    )
}