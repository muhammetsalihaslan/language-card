import { useState } from "react";

const Card = (languages) => {
    const [card, setCard] = useState


   const turn = () => {
    setCard()
   }



    const {name, img, options} = languages;
    return(
         <div onclick={turn} className="cards">{options}
            <img src={img} alt="img" />
            <div className="title">
                <p>{name}</p>
            </div>
                        

        </div>
    )
}

export default Card;