import React from "react";
import ImageSlider from "../components/ImageSlider";
import "../styles.css";



const Home = () => {

    const slides = [
        { url: "http://localhost:3000/Bird-1.jpg", title: "Belted Kingfisher" },
        { url: "http://localhost:3000/Bird-2.jpg", title: "Northern Parula" },
        { url: "http://localhost:3000/Bird-3.jpg", title: "California Condor" },
        { url: "http://localhost:3000/Bird-4.jpg", title: "Tundra Swan" },
        { url: "http://localhost:3000/Bird-5.jpg", title: "Bufflehead" },
    ]
    const containerStyles = {
        width: "900px",
        height: "500px",
        margin: "0 auto",
    };

	return (
		<div>
			<h1> Welcome, Birders! </h1>
						<h2>Donations</h2>
            			<a href = "https://give.birds.cornell.edu/page/87895/donate/1?ea.tracking.id=PXXXXX01C&utm_source=googlesearch&utm_medium=cpc&utm_campaign=evergreen&gad_source=1&gclid=CjwKCAjw7-SvBhB6EiwAwYdCAZTeUIr9r5-L1xpqmycdNLY59-wW0gQV2ddH-2oHV9a9A45eSpnXWxoCcfcQAvD_BwE">
            			<button type = "button"> Donate to help birds here!</button>
            			</a>
            <div style={containerStyles}>
            <ImageSlider slides={slides} />
            </div>

		</div>
	);
};

export default Home;