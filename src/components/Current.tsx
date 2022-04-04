import GetIcons from "./GetIcons";
import GetWinDir from "./GetWinDir";

type AppProps = {
    curr: any;
  };

const Current = ({curr} : AppProps) => {
    return (<>
                <p className="text-gray-400 text-xl font-bold">Aujourd'hui</p>
                <GetIcons code={curr.condition.code} who={"curr"} />  
                <div className="flex justify-evenly my-4">
                    <div className="flex flex-col align-items">
                        <p className="text-gray-400 text-lg"><span className="text-6xl">{curr.temp_c}</span>°C</p>
                    </div>
                    <div className="">
                        <p className="text-gray-400 text-lg font-bold">{curr.condition.text}</p>
                        <p className="text-gray-400 text-lg">Vit. du vent : {curr.wind_kph}km/h</p>
                        <p className="text-gray-400 text-lg">Dir. du vent : <GetWinDir code={curr.wind_dir} /></p>
                    </div>
                </div>
            </>)
}

export default Current;