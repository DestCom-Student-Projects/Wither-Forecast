import { useState } from "react";
import axios from 'axios';

const Form = ({setDisplayResult} : {setDisplayResult:any}) =>{

    const [query, setQuery] = useState<string | null>(null);

    const submitted = (e:any) => {
        e.preventDefault();

        axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${query}&aqi=yes&lang=fr`)
        .then(res => {
            setDisplayResult(res.data);        
        })
        .catch(err => {
            console.log(err);
        });
        

        setDisplayResult(true);
    }

    return (
    <div className="w-1/4 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <div className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
        </div>
        <div className="py-4 px-4 m-auto text-white text-xl">
            <input type={'text'} className="outline-none bg-transparent placeholder:text-gray-500 text-gray-500 border-2 border-gray-500 rounded my-2" placeholder="Username" onChange={(e) => setQuery(e.target.value)} />
            <div onClick={(e)=>submitted(e)} className="w-1/2% m-auto bg-color-1 text-lg rounded my-2 text-gray-400">Get wither</div>
        </div>
    </div>)
}

export default Form;