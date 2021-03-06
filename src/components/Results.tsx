import { useEffect } from "react";
import axios from "axios";

import Current from "./Current";
import Forecast from "./Forecast";

type AppProps = {
    displayResult: any;
    setDisplayResult: any;
  };

const Results = ({displayResult, setDisplayResult}: AppProps) =>{

    useEffect(() => {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${displayResult.location.name},${displayResult.location.country}&days=4&aqi=yes&lang=en`)
            .then(res => {
                setDisplayResult(res.data);        
            })
            .catch(err => {
                console.log(err);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className="lg:w-2/4 w-11/12 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                <div className="py-3 px-4 flex">
                    <div className="rounded-full w-3 h-3 bg-red-500 mr-2 hover:cursor-pointer" onClick={()=>setDisplayResult(false)}></div>
                    <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                    <div className="rounded-full w-3 h-3 bg-green-500"></div>
                    <p className="text-gray-600 h-3 text-xs italic ml-3">{"(<--- Click on red dot to close and search for a new location)"}</p>
                </div>
                <p className="text-gray-400 text-2xl font-bold px-5 py-3 lg:py-auto">{displayResult.location.name}, {displayResult.location.country}</p>
                <div className="lg:py-4 px-4 m-auto text-white text-xl lg:flex lg:justify-around">
                    <div className="flex flex-col lg:w-1/2 h-1/4 m-auto lg:border-r-2 border-gray-700">
                        <Current curr={displayResult.current} />
                    </div>
                    <div className="flex flex-col lg:w-1/2 m-auto lg:pl-6">
                        {displayResult.forecast.forecastday.map((day:any, index:number) => {
                            return <Forecast fore={day.day} date={day.date} key={index} />
                        })}
                    </div>      
                </div>
            </div>
}

export default Results;