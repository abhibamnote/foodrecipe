import "./Search.css"

function Search({
    query,
    onQueryChange
}) {

    return (
        <>
            <div className="search-wrapper-div">
                <div className="search-wrapper">
                    <input className="search" onChange={(e)=> onQueryChange && onQueryChange(e.target.value)} placeholder="Enter ingredient name" type="text" name=""  />
                    <button>Sr</button>
                </div>
            </div>
            <h2>Your Search Results:</h2>
        </>
    )
}

export default Search;