import React from "react";
import Navbar from "./components/Navbar";
import Hotspots from "./pages/hotspots";
import MyBirds from "./pages/mybirds";
import OtherBirders from "./pages/otherbirders";
import SearchDatabase from "./pages/search";
import BlogPosting from "./pages/blog";
import Home from "./pages/home";
import app from "./App";


function App() {
    let component
    switch (window.location.pathname) {
    case "/":
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
    app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })
    }
    return (
    <>
        <Navbar/>
        {component}
    </>
    )
}

export default App;
