import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

const NasaList = () => {
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then((response) => {
                console.log(response);
                setNasaData(response.data);
            })
            .catch((error) => {
                console.log("Failed to retrieve photo.")
            })
    }, []);


    return (
        <div>
            <NasaCard title={nasaData.title} date={nasaData.date} explanation={nasaData.explanation} hdurl={nasaData.hdurl}/>
        </div>
    )
}

export default NasaList;