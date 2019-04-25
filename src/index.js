import "purecss"
import "purecss/build/grids-responsive.css"
import "../styles/style.scss"
import "whatwg-fetch"

import * as GLOBALS from './globals'
import * as promiseUtils from "./utils/responseUtils"
import * as searchParameterUtils from "./utils/searchParameterUtils"
import * as htmlUtils from "./utils/htmlUtils"
import {buildPagination} from "./utils/htmlUtils";

let responseData;

document.onreadystatechange = () => {
    if(document.readyState === "complete"){

        //Bind grid mode change
        bindGridModeChangeEvent();

        //Bind list mode change
        bindListModeChangeEvent();

        //Get data
        fetchData(searchParameterUtils.getPageParameter(window.location.search));
    }
};

//TODO: Test with cypress
function bindGridModeChangeEvent(){
    //Bind grid mode change
    document.getElementById("gridModeSelector").addEventListener("click", (e) => {
        e.preventDefault();
        let search = searchParameterUtils.getGridModeSearchParam(window.location.search);
        history.pushState({id: "grid-mode"}, "", search);
        htmlUtils.buildDocumentPage(responseData);
    });
}

//TODO: Test with cypress
function bindListModeChangeEvent(){
    document.getElementById("listModeSelector").addEventListener("click", (e) => {
        e.preventDefault();
        let search = searchParameterUtils.getListModeSearchParam(window.location.search);
        history.pushState({id: "list-mode"}, "", search);
        htmlUtils.buildDocumentPage(responseData);
    });
}

//TODO: Test with cypress
function bindPageChangeEvent() {
    let links = document.getElementsByClassName("page-link");

    for(let i=0; i < links.length; i++)
    {
        links[i].addEventListener("click", (e) => {
            e.preventDefault();
            let page = e.target.getAttribute("href");
            let search = searchParameterUtils.getSearchParamWithNewParameterValue(window.location.search, "page", page);
            history.pushState({id: e.target.toString()}, "", search);
            fetchData(page-1);
        });
    }
}

//TODO: Test with cypress
function fetchData(page){
    fetch(`${GLOBALS.API_ENDPOINT}${page}`)
        .then(promiseUtils.checkStatus)
        .then(promiseUtils.parseJSON)
        .then((data) => {

            //Set data to be available when changing view mode
            responseData = data;

            //Build the page
            htmlUtils.buildDocumentPage(responseData);

            // Set pagination
            let paginationContainer = document.getElementById("paginationContainer");
            paginationContainer.innerHTML = "";
            let pagination = buildPagination(responseData.response.numFound, 16);
            paginationContainer.appendChild(pagination);

            //Bind page link click
            bindPageChangeEvent();

        }).catch(function() {
    });
}




