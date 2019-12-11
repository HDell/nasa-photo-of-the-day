import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

const NasaList = () => {
    const [nasaData, setNasaData] = useState([]);
    const [dateString, setDateString] = useState("2019-12-11");

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateString}`)
            .then((response) => {
                console.log(response);
                setNasaData(response.data);
            })
            .catch((error) => {
                console.log("Failed to retrieve photo.")
            })
    }, [dateString]);


    return (
        <div>
            <NasaCard title={nasaData.title} date={nasaData.date} explanation={nasaData.explanation} hdurl={nasaData.hdurl}/>
            <div>
                <select id="dropDown" onChange={() => setDateString(document.getElementById("dropDown").options[document.getElementById("dropDown").selectedIndex].value)}>
                    <option value="2012-03-14">2012-03-14</option>
                    <option value="2016-01-27">2016-01-27</option>
                    <option selected value="2019-12-11">2019-12-11</option>
                </select>
            </div>
        </div>
    )
}

export default NasaList;