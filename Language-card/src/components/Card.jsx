


const Card = (languages) => {
    const {name, img} = languages;
    return(
         <div className="cards">
            <img src={img} alt="" />
            <div className="title">
                <p>{name}</p>
            </div>
                        

        </div>
    )
}

export default Card;