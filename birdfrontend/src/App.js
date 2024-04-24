import Comments from "./components/Comments"
import React from "react";
import Login from "./components/login";
import Register from "./components/register";
import Navbar from "./components/Navbar";
import EnterMyBirdData from "./components/EnterMyBirdData";
import Hotspots from "./pages/hotspots";
import MyBirds from "./pages/mybirds";
import OtherBirders from "./pages/otherbirders";
import OtherBirderData from "./components/OtherBirderData";
import UpdateBird from "./components/updateBird";
import SearchDatabase from "./pages/search";
import BlogPosting from "./pages/blog";
import Home from "./pages/home";
import app from "./App";
import Europe from "./pages/Europe";
import Europe2 from "./pages/Europe2";
import Europe3 from "./pages/Europe3";
import Europe4 from "./pages/Europe4";
import Europe5 from "./pages/Europe5";
import Europe6 from "./pages/Europe6";
import Europe7 from "./pages/Europe7";
import Europe8 from "./pages/Europe8";
import Europe9 from "./pages/Europe9";
import Europe10 from "./pages/Europe10";
import NorthAmerica from "./pages/NorthAmerica";
import NorthAmerica2 from "./pages/NorthAmerica2";
import NorthAmerica3 from "./pages/NorthAmerica3";
import NorthAmerica4 from "./pages/NorthAmerica4";
import NorthAmerica5 from "./pages/NorthAmerica5";
import NorthAmerica6 from "./pages/NorthAmerica6";
import NorthAmerica7 from "./pages/NorthAmerica7";
import NorthAmerica8 from "./pages/NorthAmerica8";
import NorthAmerica9 from "./pages/NorthAmerica9";
import NorthAmerica10 from "./pages/NorthAmerica10";
import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MediaGallery from "./pages/mediagallery";
import Update from "./components/Update.js";
import Blog from "./components/EnterBlogData.js";

function App() {

    let component
    switch (window.location.pathname) {
//    case "/":
//        component = <Login />
//        break
    case "/mediagallery":
            component = <MediaGallery />
            break
    case "/home":
        component = <Home />
        break
    case "/hotspots":
        component = <Hotspots />
        break
    case "/mybirds":
        component = <MyBirds />
        break
    case "/otherbirders":
        component = <OtherBirders />
        break
    case "/search":
        component = <SearchDatabase />
        break
    case "/blog":
        component = <BlogPosting />
        break
    case "/hotspots/Europe":
        component = <Europe />
        break
    case "/hotspots/Europe2":
        component = <Europe2 />
        break
    case "/hotspots/Europe3":
        component = <Europe3 />
        break
    case "/hotspots/Europe4":
        component = <Europe4 />
        break
    case "/hotspots/Europe5":
        component = <Europe5 />
        break
    case "/hotspots/Europe6":
        component = <Europe6 />
        break
    case "/hotspots/Europe7":
        component = <Europe7 />
        break
    case "/hotspots/Europe8":
        component = <Europe8 />
        break
    case "/hotspots/Europe9":
        component = <Europe9 />
        break
    case "/hotspots/Europe10":
        component = <Europe10 />
        break
    case "/hotspots/NorthAmerica":
        component = <NorthAmerica />
        break
    case "/hotspots/NorthAmerica2":
        component = <NorthAmerica2 />
        break
    case "/hotspots/NorthAmerica3":
        component = <NorthAmerica3 />
        break
    case "/hotspots/NorthAmerica4":
        component = <NorthAmerica4 />
        break
    case "/hotspots/NorthAmerica5":
        component = <NorthAmerica5 />
        break
    case "/hotspots/NorthAmerica6":
        component = <NorthAmerica6 />
        break
    case "/hotspots/NorthAmerica7":
        component = <NorthAmerica7 />
        break
    case "/hotspots/NorthAmerica8":
        component = <NorthAmerica8 />
        break
    case "/hotspots/NorthAmerica9":
        component = <NorthAmerica9 />
        break
    case "/hotspots/NorthAmerica10":
        component = <NorthAmerica10 />
        break
    app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
    }
    return (
    <div>


    <div className="App">
     <BrowserRouter>
     <Navbar/>
     {component}
          <Routes>
              <Route path='/home' element= { <Home/>} />
              <Route path='/register' element= { <Register/>} />
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/update/:id' element={<Update />} />
              <Route path="/myBirds/entries/:username" element={<OtherBirderData/>} />
              <Route path="/myBirds/add/:id" element={<UpdateBird/>} />
         </Routes>
     </BrowserRouter>
    </div>
    </div>
    )
}

export default App;
