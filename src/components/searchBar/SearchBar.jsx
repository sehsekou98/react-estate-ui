import { useState } from "react";
import "./searchBar.scss";



const types = ["buy", "rent"];
function SearchBar() {
  const [query,setQuerry] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice:0,
})

const switchType = (val) => {

}
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => {
          <button key={type} onClick={() =>switchType(types)}>
            (type)
          </button>
})}
      </div>
        <form>
          <input type="text"
           name='location'
           placeholder='City Location'
           />
          <input 
          type="number"
          name='mainPrice'
          min={0}
          max={1000000}
          placeholder='Min Price'
          />
          <input 
          type="number"
          name='maxPrice'
          min={0}
          max={1000000}
          placeholder='Max Price'
          />
          <button>
            <img src="/search.png" alt="" />
          </button>
        </form>
      </div>
  )
}

export default SearchBar;
