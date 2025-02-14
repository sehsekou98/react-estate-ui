import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"


function homePage () {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
        <h1 className="title">
            Find Real Estate and Get Your Dream Place.
        </h1>
        <p> 
        Welcome to SmartRE, your trusted real estate platform for buying, selling, and renting properties. Whether you're searching for a cozy apartment, 
        a luxurious villa, or a commercial space, we make the process seamless and stress-free.
        </p>
        <SearchBar />
        <div className="boxes">
        <div className="box">
          <h1>17+</h1>
          <h2>Years of Experience</h2>
        </div>
        <div className="box">
          <h1>100</h1>
          <h2>Awards Gained</h2>
        </div>
        <div className="box">
          <h1>1000+</h1>
          <h2>Property Ready</h2>
        </div>
        </div>
      </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default homePage
    