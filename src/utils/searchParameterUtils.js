import * as GLOBALS from '../globals'

export function getGridModeSearchParam(search){
    return getSearchParamWithNewParameterValue(search, GLOBALS.searchParameterMode, GLOBALS.viewModeGrid);

}

export function getListModeSearchParam(search){
    return getSearchParamWithNewParameterValue(search, GLOBALS.searchParameterMode, GLOBALS.viewModeList);
}

export function getSearchParamWithNewParameterValue(search, param, value){
    let searchParams = new URLSearchParams(search);
    searchParams.set(param, value);
    return "?" + searchParams.toString();
}

export function getPageParameter(search){
    let searchParams = new URLSearchParams(search);

    if(!searchParams){
        return 0;
    }

    let page = parseInt(searchParams.get(GLOBALS.searchParameterPage));

    if(Number.isNaN(page)){
        return 0;
    }

    if(page <= 0 || page > 3){
        return 0;
    }

    return page - 1;
}

export function getModeParameter(search){
    let searchParams = new URLSearchParams(search);

    if(!searchParams){
        return "grid";
    }

    let mode = searchParams.get("mode");

    if(mode === "grid" || mode === "list"){
        return mode;
    }else{
        return "grid";
    }
}