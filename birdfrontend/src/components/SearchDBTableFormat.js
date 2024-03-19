import React from "react";
import { useState } from "react";


function SearchDBTableFormat() {
    return (
		<>
		    <br />
			Search Community Bird Database pending:
			<input type="text" placeholder="search for birds here..." className="search" />
			<br />
			<h3>Results:</h3>
			<table>
                <tbody>
                    <tr>
                        <th>Species</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Field Notes</th>
                    </tr>
                    <tr>
                        <td>placeholder species</td>
                        <td>placeholder date</td>
                        <td>placeholder location</td>
                        <td>placeholder field notes</td>
                    </tr>
                </tbody>
            </table>
		</>
	);
};

export default SearchDBTableFormat;

//don't forget to add tolowercase for case insensitivity
    //const search = (bird) => { return bird.filter((item)=>item.species.toLowerCase().includes(query) ||
    //item.date.toLowerCase().includes(query) || item.location.toLowerCase().includes(query) )}

//{bird.map((item) => (
    //<tr key={item.id}>
        //<td>{item.species}</td>
        //...
    //</tr>
//))}
