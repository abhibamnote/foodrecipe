import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/heading/Heading";
import Search from "./components/search/Search";
import CardsContainer from "./components/cardsContainer/CardsContainer";
import Popup from "./components/popup/Popup";

function App() {
    const [query, setQuery] = useState("");
    const [menu, setMenu] = useState([]);
    const [popup, setPopup] = useState({
        name: "",
        category: "",
        inst: "",
        image: "",
        youtube: ""
    })
    const [active, setActive] = useState(false)
    
    return <>
        <Heading></Heading>
        <Search query={query} onQueryChange={(query) => {setQuery(query)}}></Search>
        <Popup active={active} changeActive={setActive} {...popup}></Popup>
        <CardsContainer query={query} menu={menu} setActive={setActive} setMenu={setMenu} setPopup={setPopup}></CardsContainer>
    </>;
}

export default App;
