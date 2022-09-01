import "./blogCards.scss"
import Food1 from "../assets/blog images/food1.png"
import Food2 from "../assets/blog images/food2.png"
import Food3 from "../assets/blog images/food3.png"

const blogData=[
    {
        img:Food1,
        author:"Henry Ezechi",
        date:"01 October, 2019",
        title:"Better Than Takeout Kung Pao Chicken",
        description:"This spicy, tangy, and sweet better than takeout no peanut kung pao chicken stir fry recipe "
    },
    {
        img: Food2,
        author:"Gwen Chukwuma",
        date:"21 November, 2022",
        title:"The Best Sesame Soy Broccoli Salad",
        description:"Hello broccoli salad! Broccoli salad with a sweet and tangy dressing is my new go to for summer parties. "
    },
    {
        img:Food3,
        author:"Ebelechi Ngozi",
        date:"24 August, 2021",
        title:"Nigerian Jollof is the best",
        description:"This super easy version of dan dan noodles is fast, flavorful, and vegetarian to boot. It’s definitely  "
    },
]

export default function BlogCards() {
    return (
        <>
            {
                blogData.map((blog)=>{
                    return(
                        <BlogCardLayout
                            date={blog.date}
                            title={blog.title}
                            description={blog.description}
                            author={blog.author}
                            img={blog.img}
                        />
                    )
                })
            }
        </>
    )
}

function BlogCardLayout({date,title,description, author,img}){
    return(
        <div className={"blog-card-layout"}>
            <img src={img}/>
            <div className={"date-author"}>
                <p>{author}</p>
                <p>{date}</p>
            </div>
            <div className={"title-description"}>
                <h5>{title}</h5>
                <p className={"description"}>{description}</p>
                <a>READ MORE</a>
            </div>

        </div>
    )
}
