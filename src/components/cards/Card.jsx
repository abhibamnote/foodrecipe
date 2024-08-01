import "./Card.css";

function Card({
    image,
    name,
    id,
    setPopup,
    setActive
}){

    const showPopup = async () => {
        event.preventDefault();
        const menuId = event.target.dataset.id;
        const result = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${menuId}`)).json()
        const information = result.meals[0];
        setPopup({
            name: information.strMeal,
            category: information.strCategory,
            inst: information.strInstructions,
            image: information.strMealThumb,
            youtube: information.strYoutube
        })
        setActive(true)
    }

    return (
        <>
            <div className="meal-item">
                <div className="meal-img">
                    <img src={image} alt="" height="400px" width="400px" />
                </div>
                <div className="meal-name">
                    <h3>{name}</h3>
                    <a href="#" className="recipe-btn" data-id={id} onClick={showPopup}>Get Recipe</a>
                </div>
            </div>
        </>
    )
}

export default Card;