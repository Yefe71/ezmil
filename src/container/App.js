import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SwiperComp from "../components/SwiperComp/SwiperComp";
import SideAlters from "../components/SideAlters/SideAlters";
import SwiperComp2 from "../components/SwiperComp2/SwiperComp2";
import Discography from "../components/Discography/Discography";
function App() {

const [page, setPage] = useState('home')


const changePage = newPage => {
  setPage(newPage);
};

return (
<BrowserRouter>
<div className="app">
<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="App.css" />
<title>Ez Mil</title>


    {page === "home" ? 
      <>
        <header>
          <div className="home-info">
            <h1>This is Ez Mil</h1>
            <p>
              EZ Mil's music often addresses social
              and political issues, as well as personal experiences, making him
              one of the most relatable artists in the Philippines. He has
              released several popular songs and albums, and continues to be a
              prominent figure in the country's hip-hop scene.
            </p>
          </div>

          <Navbar changePage = {changePage}/>
        </header>
        <SideAlters />
        <SwiperComp changePage = {changePage}/>
      </>
    : 
      // condition is "discography"
      <>
      <Navbar />
      <Discography/>
      </>
    }

  </div>
</BrowserRouter>
);
}

export default App;


