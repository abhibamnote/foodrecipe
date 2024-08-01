import './Popup.css';

function Popup({
    active,
    changeActive,
    name,
    category,
    inst,
    image,
    youtube
}){
    return (
        <div className={active ? "meal-details showRecipe": "meal-details"} >
            <button type="buttton" onClick={()=>{changeActive(false)}} className="btn recipe-close-btn" id="recipe-close-btn"><i>x</i></button>
            <div className='meal-details-content'>
                <h2 className="recipe-title">{name}</h2>
                    <p className="recipe-category">{category}</p>
                    <div className="recipe-instruct">
                        <h3>Instructions</h3>
                        <p>{inst}</p>
                    </div>
                    <div className="recipe-meal-img">
                        <img src={image} alt="" height="400px" width="400px" />
                    </div>
                    <div className="recipe-link">
                        <a href={youtube} target="_blank">Watch Video</a>
                    </div>
            </div>
        </div>
    )
}

export default Popup;