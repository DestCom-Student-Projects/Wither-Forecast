import GetIcons from "./GetIcons";

type AppProps = {
    fore: any;
    date: string;
};

const Forecast = ({fore, date} : AppProps) => {
    return (<>
                <p className="text-gray-400 text-xl font-bold">{date}</p>
                <div className="flex justify-evenly">
                    <div className="w-1/4">
                        <GetIcons code={fore.condition.code} who={"fore"}/>
                    </div>
                    <div className="">
                        <div className="flex justify-evenly">
                            <p className="text-gray-400 text-lg mr-2">{fore.avgtemp_c}°C</p>
                            <p className="text-gray-400 text-lg font-bold">{fore.condition.text}</p>
                        </div>
                        <p className="text-gray-400 text-lg">Max. temperature : {fore.maxtemp_c}°C</p>
                        <p className="text-gray-400 text-lg">Vit. max. du vent : {fore.maxwind_kph}km/h</p>
                    </div>
                </div>
            </>)
}

export default Forecast;