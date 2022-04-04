import thunderstormRain from '../assets/images/weatherIcons/thunderstorms-rain.svg';
import thunderstormSnow from '../assets/images/weatherIcons/thunderstorms-snow.svg';
import thunderstorm from '../assets/images/weatherIcons/thunderstorms.svg';
import snow from '../assets/images/weatherIcons/snow.svg';
import rain from '../assets/images/weatherIcons/rain.svg';
import partlyCloudySleet from '../assets/images/weatherIcons/partly-cloudy-day-sleet.svg';
import partlyCloudy from '../assets/images/weatherIcons/partly-cloudy-day.svg';
import overcast from '../assets/images/weatherIcons/overcast.svg';
import mist from '../assets/images/weatherIcons/mist.svg';
import hail from '../assets/images/weatherIcons/hail.svg';
import fog from '../assets/images/weatherIcons/fog.svg';
import drizzle from '../assets/images/weatherIcons/drizzle.svg';
import cloudy from '../assets/images/weatherIcons/cloudy.svg';
import clearDay from '../assets/images/weatherIcons/clear-day.svg';

type AppProps = {
    code: number;
    who:string;
  };

const GetIcons = ({code, who} : AppProps) => {

    const giveIcon = (iconeAsked: number) => {
        switch(iconeAsked){
            case 1000:
                      return clearDay;                   
                  case 1006:
                      return cloudy;                   
                  case 1009:
                      return overcast;                      
                  case 1030:
                      return mist;            
                  case 1003:
                      return partlyCloudy;
                  case 1087:
                      return thunderstorm;
                  case 1279:
                  case 1282:
                      return thunderstormSnow;
                  case 1273:
                  case 1276:
                      return thunderstormRain;
                  case 1135:
                  case 1147:
                      return fog;
                  case 1237:
                  case 1261:
                  case 1264:
                      return hail;
                  case 1072:
                  case 1150:
                  case 1153:
                  case 1168:
                  case 1171:
                      return drizzle;
                  case 1069:
                  case 1204:
                  case 1207:
                  case 1249:
                  case 1252:
                      return partlyCloudySleet;
                  case 1066:
                  case 1114:
                  case 1117:
                  case 1210:
                  case 1213:
                  case 1216:
                  case 1219:
                  case 1222:
                  case 1225:
                  case 1255:
                  case 1258:
                      return snow;
                  case 1063:
                  case 1180:
                  case 1183:
                  case 1186:
                  case 1189:
                  case 1192:
                  case 1195:
                  case 1198:
                  case 1201:
                  case 1240:
                  case 1243:
                  case 1246:
                      return rain;
                  default:
                      break;
              }
        };

    return <img src={giveIcon(code)} alt={"Actual weather"} className={who === "curr" ? "h-vp-actual-img" : ""} />;
}

export default GetIcons;