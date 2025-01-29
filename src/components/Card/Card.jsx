import "./Card.css"
import reactlogo from "../../assets/react.svg"
import { useState } from "react";

const Card = ({image, service, description}) =>{

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    }

    return(
        <div className={`card-container ${isFlipped? "flipped" : ""}`} onClick={handleFlip}>
            <div className="card-inner-content">
                <div className="flip-card-front">
                    <h3 className="card-heading">{service}</h3> 
                    <img src={image} alt="" />
                </div>
                <div className="flip-card-back">
                    <p className="card-content">{description}</p> 
                </div>
            </div>
        </div>
    )
}


export default Card;