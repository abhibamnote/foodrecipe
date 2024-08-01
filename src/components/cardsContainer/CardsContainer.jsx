import { useEffect } from "react"
import Card from "../cards/Card";
import "./CardsContainer.css"
function CardsContainer({
    query,
    setMenu,
    menu,
    setPopup,
    setActive
}){
    useEffect(()=>{
        const getData = setTimeout(()=>{
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
                .then((response)=> response.json())
                .then((response) => {
                    if(response.meals?.length > 0){
                        setMenu(response.meals)
                    }
                })
        }, 2000)

        return () => clearTimeout(getData)
    }, [query])
    

    const cards = menu.map((item)=>{
        return <Card key={item.idMeal} setActive={setActive} setPopup={setPopup} image={item.strMealThumb} name={item.strMeal} id={item.idMeal}></Card>
    })
    
    return(
        <div className="card-container">
            {cards}
        </div>
    )
}

export default CardsContainer;