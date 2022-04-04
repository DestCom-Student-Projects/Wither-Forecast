const GetWinDir = ({code} : {code:string}) => {

    const winDirObjectEn = {
        n:"North",
        s:"South",
        e:"East",
        w:"West",
        nw:"Northwest",
        ne:"Northeast",
        sw:"Southwest",
        se:"Southeast",
        sse:"South-southeast",
        ssw:"South-southwest",
        nne:"North-northeast",
        nnw:"North-northwest",
        ene:"East-northeast",
        wne:"West-northeast",
        ese:"East-southeast",
        wse:"West-southeast",
        wsw:"West-southwest",
        wnw:"West-northwest",
    };

    const giveDir = (dirAsked: string) => {
        switch(dirAsked){
            case 'N':
                return winDirObjectEn.n;
            case 'NNE':
                return winDirObjectEn.nne;
            case 'NE':
                return winDirObjectEn.ne;
            case 'ENE':
                return winDirObjectEn.ene;
            case 'E':
                return winDirObjectEn.e;
            case 'ESE':
                return winDirObjectEn.ese;
            case 'SE':
                return winDirObjectEn.se;
            case 'SSE':
                return  winDirObjectEn.sse;
            case 'S':
                return winDirObjectEn.s;
            case 'SSW':
                return winDirObjectEn.ssw;
            case 'SW':
                return winDirObjectEn.sw;
            case 'WSW':
                return winDirObjectEn.wsw;
            case 'W':
                return winDirObjectEn.w;
            case 'WNW':
                return winDirObjectEn.wnw;
            case 'NW':
                return winDirObjectEn.nw;
            case 'NNW':
                return winDirObjectEn.nnw;
            default:
                break;
              }
        };

    return <> {giveDir(code)} </>
}

export default GetWinDir;