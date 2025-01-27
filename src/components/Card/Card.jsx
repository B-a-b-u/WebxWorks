import "./Card.css"
import reactlogo from "../../assets/react.svg"
import { useState } from "react";

const Card = () =>{

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    }

    return(
        <div className={`card-container ${isFlipped? "flipped" : ""}`} onClick={handleFlip}>
            <div className="card-inner-content">
                <div className="flip-card-front">
                    <img src={reactlogo} alt="" />
                </div>
                <div className="flip-card-back">
                    <h3 className="card-heading">Web Dev</h3> 
                    <p className="card-content">This si scomes adsfsasdf adsfa adsfads conetnte</p> 
                </div>
            </div>
        </div>
    )
}


export default Card;