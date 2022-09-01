import "./cardComponent.scss"


export const food = [
    {
        img: "",
        title: "Jollof Rice and Chicken",
        description:"Fried potato/yam chips with egg sauce or any topping of your choice",
        price: " ₦ 1,500"
    },
    {
        img: "",
        title: "Swallow with Draw Soup",
        description:"Fried potato/yam chips with egg sauce or any topping of your choice",
        price: "₦ 1000"
    },
    {
        img: "",
        title: "Fries with Egg sauce",
        description:"Fried potato/yam chips with egg sauce or any topping of your choice",
        price: " ₦ 1,500"
    },
    {
        img: "",
        title: "Swallow with Egusi Soup",
        description:"Nicely cooked egusi soup and eba",
        price: " ₦ 1000"
    },
    {
        img: "",
        title: "Swallow with Egusi Soup",
        description:"Nicely cooked egusi soup and eba",
        price: " ₦ 1000"
    },
    {
        img: "",
        title: "Fried Rice",
        description:"Fried potato/yam chips with egg sauce or any topping of your choice",
        price: "  ₦ 600"
    },
]


export default function Card({image, title, description,price}){
    return(
        <>
            <div className={"card-div"}>
                <img src={image} alt={"image"}/>
                <div className={"details"}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <div className={"price-order"}>
                        <p className={"price"}>{price}</p>
                        <p className={"order"}>Order now</p>
                    </div>

                </div>

            </div>
        </>
    )
}