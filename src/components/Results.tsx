import GetIcons from "./GetIcons";
import GetWinDir from "./GetWinDir";

const Results = ({displayResult} : {displayResult : any}) =>{

    return <div className="w-1/4 m-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden ">
                <div className="py-3 px-4 flex">
                    <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
                    <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                    <div className="rounded-full w-3 h-3 bg-green-500"></div>
                </div>
                <div className="py-4 px-4 m-auto text-white text-xl">
                <p className="text-gray-400 text-2xl font-bold">{displayResult.location.name}, {displayResult.location.country}</p> 
                    <div>
                        <GetIcons code={displayResult.current.condition.code} />
                    </div>
                    <div className="flex justify-evenly">
                        <div>
                            <p className="text-gray-400 text-lg"><span className="text-6xl">{displayResult.current.temp_c}</span>°C</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-lg font-bold">{displayResult.current.condition.text}</p>
                            <p className="text-gray-400 text-lg">Vit. du vent : {displayResult.current.wind_kph}km/h</p>
                            <p className="text-gray-400 text-lg">Dir. du vent : <GetWinDir code={displayResult.current.wind_dir} /></p>
                        </div>
                    </div>
                </div>
            </div>
}

export default Results;