import { useState } from "react";
import axios from 'axios';

import Header from './Header';

type AppProps = {
    displayResult: any;
    setDisplayResult: any;
};

const Form = ({displayResult,setDisplayResult} : AppProps) =>{

    const [query, setQuery] = useState<string | null>(null);

    const submitted = (e:any) => {
        e.preventDefault();
        console.log("aaaaa");
        if(query === null) return;

        if(displayResult === "cancel") setDisplayResult(null);

        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${query}&days=4&aqi=yes&lang=fr`)
        .then(res => {
            console.log(res.data);
            setDisplayResult(res.data);        
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
    <div className="w-1/4 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <div className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="py-4 px-4 m-auto text-white text-xl w-11/12 flex flex-col items-center">
        <Header />
            <input type={'text'} className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 border-2 border-gray-500 rounded my-2 mx-auto p-2" placeholder="Ville, Pays" onChange={(e) => setQuery(e.target.value)} />
            <div onClick={(e)=>submitted(e)} className={`w-1/2% m-auto bg-color-1 text-lg rounded my-2 text-gray-400 py-2 text-center ${query? "hover:bg-color-2 cursor-pointer" : "cursor-not-allowed"}`}>Get wither</div>
        </div>
    </div>)
}

export default Form;