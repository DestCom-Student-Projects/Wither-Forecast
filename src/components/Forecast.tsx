import GetIcons from "./GetIcons";

type AppProps = {
    fore: any;
    date: string;
};

const Forecast = ({fore, date} : AppProps) => {
    return (<>
                <p className="text-gray-400 text-xl font-bold border-t-2 border-gray-700 lg:border-0 pt-4 lg:pt-auto">{date}</p>
                <div className="flex justify-evenly mb-4 lg:mb-auto">
                    <div className="w-1/4 flex align-items lg:flex-col">
                        <GetIcons code={fore.condition.code} who={"fore"}/>
                    </div>
                    <div className="">
                        <p className="text-gray-500 text-xs italic">Average :</p>
                        <div className="flex justify-evenly">
                            <p className="text-gray-400 text-lg mr-5">{fore.avgtemp_c}°C</p>
                            <p className="text-gray-400 text-lg font-bold">{fore.condition.text}</p>
                        </div>
                        <p className="text-gray-500 text-xs italic">Maximum :</p>
                        <p className="text-gray-400 text-lg">Temp. : {fore.maxtemp_c}°C</p>
                        <p className="text-gray-400 text-lg">Wind speed : {fore.maxwind_kph} km/h</p>
                    </div>
                </div>
            </>)
}

export default Forecast;