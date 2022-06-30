import { useState } from "react";

const Card = (languages) => {
   const [showLogo, setShowLogo] = useState(true);

   const handleClick = (e) => {
    setShowLogo(!showLogo);
    // setInterval(function () {
    //     e.preventDefault();
    // },3000)
   };


    const {name, img, options} = languages;
    return(
         <div onclick className="cards" onClick={handleClick}>
            {showLogo ? (

            <div>
            <img src={img} alt="img" />
            <div className="title">
                <p>{name}</p>
            </div>
           </div>) : (
           
           <ul>
            {options.map((element, index) =>{
                return <li key={index}>{element}</li>
            })}
           </ul>
        )}
                        

        </div>
    )
}

export default Card;