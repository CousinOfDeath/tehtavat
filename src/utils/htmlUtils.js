import * as dateUtils from "./dateUtils";
import * as searchParameterUtils from "./searchParameterUtils";
import * as GLOBALS from '../globals'

export function setDocumentCount(element, count) {
    element.textContent = count;
    return element;
}

export function buildPagination(itemCount, itemsPerPage) {
    let pages = Math.ceil(itemCount/itemsPerPage);

    let paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination center";

    let page = 1;
    while(page <= pages){
        let pageLink = document.createElement("a");
        pageLink.id = `pageSelector${page}`;
        pageLink.innerText = page.toString();
        pageLink.href = page.toString();
        pageLink.className = "page-link";

        paginationDiv.appendChild(pageLink);

        page++;
    }

    return paginationDiv;
}

export function buildDocumentGridCell(doc){

    //Create responsive purecss grid cell
    let gridCellDiv = document.createElement("div");
    gridCellDiv.className = "pure-u-1 pure-u-lg-1-4";

    //l-box
    let lBoxDiv = document.createElement("div");
    lBoxDiv.className = "l-box";

    //Create container for id
    let titleDiv = document.createElement("div");
    titleDiv.className = `document-title ${doc.site_id}`;
    titleDiv.innerText = doc.site_id;

    //Create container for image
    let imgContainerDiv = document.createElement("div");
    imgContainerDiv.className = "document-img";
    let img = document.createElement("img");
    img.className = "pure-img";
    img.src = doc.img_url;
    img.alt = "Image not available";
    imgContainerDiv.appendChild(img);

    //Create container for type
    let typeDiv = document.createElement("div");
    typeDiv.className = "document-type";
    typeDiv.innerText = doc.content_type;

    //Create container for content date and author
    let authors = "";
    if(doc.author){
        authors = doc.author.join();
    }

    let date = new Date(doc.content_date);
    let daysOld = dateUtils.dateDiff(date, new Date());

    let contentDateDiv = document.createElement("div");
    contentDateDiv.className = "document-content-date";
    contentDateDiv.innerText = `${daysOld} päivää sitten ${authors}`;

    //Create container for original title + link
    let titleLink = document.createElement("a");
    titleLink.innerText = doc.title_original
    titleLink.href = doc.id;
    titleLink.className = "document-link";
    titleLink.setAttribute("target", "_blank");

    let originalTitleDiv = document.createElement("div");
    originalTitleDiv.className = "document-original-title";
    originalTitleDiv.appendChild(titleLink);

    //Append
    lBoxDiv.appendChild(titleDiv);
    lBoxDiv.appendChild(imgContainerDiv);
    lBoxDiv.appendChild(typeDiv);
    lBoxDiv.appendChild(contentDateDiv);
    lBoxDiv.appendChild(originalTitleDiv);
    gridCellDiv.appendChild(lBoxDiv);

    return gridCellDiv;
}

export function buildDocumentListRow(doc){

    let listRowDiv = document.createElement("div");
    listRowDiv.className = "pure-u-1 list-row";

    //Create container for original title + link
    let titleLink = document.createElement("a");
    titleLink.innerText = doc.title_original
    titleLink.href = doc.id;
    titleLink.className = "document-link";
    titleLink.setAttribute("target", "_blank");

    let originalTitleDiv = document.createElement("div");
    originalTitleDiv.className = "document-original-title";
    originalTitleDiv.appendChild(titleLink);

    //Create container for id
    let titleDiv = document.createElement("div");
    titleDiv.className = "document-title inline-block";
    titleDiv.innerText = doc.site_id;


    //Create container for type
    let typeDiv = document.createElement("div");
    typeDiv.className = "document-type inline-block";
    typeDiv.innerText = doc.content_type;

    //Create container for content date and author
    let authors = "";
    if(doc.author){
        authors = doc.author.join();
    }

    let date = new Date(doc.content_date);
    let daysOld = dateUtils.dateDiff(date, new Date());

    let contentDateDiv = document.createElement("div");
    contentDateDiv.className = "document-content-date inline-block";
    contentDateDiv.innerText = `${daysOld} päivää sitten ${authors}`;

    //Append
    listRowDiv.appendChild(originalTitleDiv);
    listRowDiv.appendChild(titleDiv);
    listRowDiv.appendChild(typeDiv);
    listRowDiv.appendChild(contentDateDiv);


    return listRowDiv;
}

export function buildDocumentPage(data){
    // Set count
    let documentCountDiv = document.getElementById("documentCount");
    setDocumentCount(documentCountDiv, data.response.numFound);

    //Get document result container
    let documentContainer = document.getElementById("documentContainer");

    //Clear old
    documentContainer.innerHTML = "";

    let mode = searchParameterUtils.getModeParameter(getWindowLocationSearch.get_search());

    // Set visible docs
    data.response.docs.forEach((doc) => {

        //Build a cell
        let documentGridCell;

        if(mode === GLOBALS.viewModeGrid){
            documentGridCell = buildDocumentGridCell(doc);
        }else{
            documentGridCell = buildDocumentListRow(doc);
        }

        //Append the cell
        documentContainer.appendChild(documentGridCell);
    });

    //Highlight the selected mode
    this.highlightSelectedMode(mode);

    //TODO: Highlight page

}

export function highlightSelectedMode(mode){
    if(mode === GLOBALS.viewModeGrid){
        let modeSelectorDivSelected = document.getElementById("gridModeSelectorDiv");
        let modeSelectorDivNotSelected = document.getElementById("listModeSelectorDiv");
        modeSelectorDivSelected.classList.add("selected");
        modeSelectorDivNotSelected.classList.remove("selected");
    }else{
        let modeSelectorDivSelected = document.getElementById("listModeSelectorDiv");
        let modeSelectorDivNotSelected = document.getElementById("gridModeSelectorDiv");
        modeSelectorDivSelected.classList.add("selected");
        modeSelectorDivNotSelected.classList.remove("selected");
    }
}

export var getWindowLocationSearch = {
    get_search: function () {
        return window.location.search;
    }
};