const GetWinDir = ({code} : {code:string}) => {

    const giveDir = (dirAsked: string) => {
        switch(dirAsked){
            case 'N':
                return 'Nord';
            case 'NNE':
                return 'Nord-Nord-Est';
          case 'NE':
                return 'Nord-Est';
            case 'ENE':
                return 'Est-Nord-Est';
              case 'E':
                return 'Est';
              case 'ESE':
                return 'Est-Sud-Est';
            case 'SE':
                return 'Sud-Est';
            case 'SSE':
                return  'Sud-Sud-Est';
            case 'S':
                return 'Sud';
            case 'SSW':
                return 'Sud-Sud-Ouest';
            case 'SW':
                return 'Sud-Ouest';
            case 'WSW':
                return 'Ouest-Sud-Ouest';
            case 'W':
                return 'Ouest';
            case 'WNW':
                return 'Ouest-Nord-Ouest';
            case 'NW':
                return 'Nord-Ouest';
            case 'NNW':
                return 'Nord-Nord-Ouest';
            default:
                break;
              }
        };

    return <> {giveDir(code)} </>
}

export default GetWinDir;