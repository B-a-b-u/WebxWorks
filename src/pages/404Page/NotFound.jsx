import "./NotFound.css"
import image from "../../assets/404.svg"
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return(
        <>
            <div className="notfound-section">
                <img className="notfound-img" src={image} alt="" />
                <NavLink to="/" ><button className="home-btn">Go home</button></NavLink>
            
            </div>
        </>
    )
}

export default NotFound;