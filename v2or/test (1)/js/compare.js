///////////html and data for popup///////////////
let compareTheseAssets = [];

let generateHTML = (data, checked, iconURL, type, per) => {
    let popupHTML;
    if(type === 'parking') {
    popupHTML = '<div class="popup-inner transform">' +
        '            <div class="popup-title">' +
        '                <img src="' + iconURL + '" alt="">' +
        '                <h2>' + data.properties.description + '</h2>' +
        '            </div>' +
        '            <div class="popup-bar">' +
        '                <div class="bar-container"> <div id="dataNumber">' + Math.round(per) + '</div>' +
        '                    <div class="bar-inner" id="animate'+ data.properties.description +'"></div>' +
        '                  </div>' +
        '            </div>' +
        '            <div class="popup-list">' +
        '                <div class="column" id=column1>' +
        '                   <p>' + Object.keys(data.properties.assetData)[0].replace("_", " ") + '</p>' +
        '                   <p>' + Object.keys(data.properties.assetData)[1].replace("_", " ") + '</p>' +
        '                   <p>' + Object.keys(data.properties.assetData)[2] + '</p>' +
        '                </div>' +
        '                <div class="column" id=column2>' +
        '                    <p>' + Object.values(data.properties.assetData)[0] + '</p>' +
        '                    <p>' + Object.values(data.properties.assetData)[1] + '</p>' +
        '                    <p>' + Object.values(data.properties.assetData)[2] + '</p>' +
        '                </div>' +
        '            </div> ' +
        '            <div class="popup-actions">' +
        '                <div class="compare-container">' +
        '                    <label for="compare">Compare</label>' +
        '                    <input type="checkbox" id="compareCheck" defaultChecked="false" ' + checked + ' name="compare" onclick="compareThisMarker(this, \'' + data.properties.description + '\')">' +
        '                    <a href="#">View Asset --></a>' +
        '                </div>' +
        '                ' +
        '' +
        '                ' +
        '            </div>' +
        '        </div>' +
        '';
    }else if (type === 'ozon') {
        popupHTML = '<div class="popup-inner transform">' +
        '            <div class="popup-title">' +
        '                <img src="' + iconURL + '" alt="">' +
        '                <h2>' + data.properties.description + '</h2>' +
        '            </div>' +
        '            <div class="popup-bar">' +
        '                <div class="bar-container bar-ozon"> <div class="dataNumberOzon" id="dataNumber">' + data.properties.level + '</div>' +
        '                    <div class="bar-inner barInnerOzon" id="animate'+ data.properties.description +'"></div>' +
        '                  </div>' +
        '<div class="categories">' +
        '<div class="cat-item" id="green"></div>' +
        '<div class="cat-item" id="yellow"></div>' +
        '<div class="cat-item" id="orange"></div>' +
        '<div class="cat-item" id="red"></div>' +
        '</div>' +
        '            </div>' +

        '            <div class="popup-list">' +
        '                <div class="column" id=column1>' +
        '                   <p>' + Object.keys(data.properties.assetData)[0].replace("_", " ") + '</p>' +
        '                   <p>' + Object.keys(data.properties.assetData)[1].replace("_", " ") + '</p>' +
        '                   <p>' + Object.keys(data.properties.assetData)[2] + '</p>' +
        '                </div>' +
        '                <div class="column" id=column2>' +
        '                    <p>' + Object.values(data.properties.assetData)[0] + '</p>' +
        '                    <p>' + Object.values(data.properties.assetData)[1] + '</p>' +
        '                    <p>' + Object.values(data.properties.assetData)[2] + '</p>' +
        '                </div>' +
        '            </div> ' +
        '            <div class="popup-actions">' +
        '                <div class="compare-container">' +
        '                    <label for="compare">Compare</label>' +
        '                    <input type="checkbox" id="compareCheck" defaultChecked="false" ' + checked + ' name="compare" onclick="compareThisMarker(this, \'' + data.properties.description + '\')">' +
        '                    <a href="#">View Asset --></a>' +
        '                </div>' +
        '                ' +
        '' +
        '                ' +
        '            </div>' +
        '        </div>' +
        '';
    }
    return popupHTML;
};

function updateCompareArray(update, description) {
    if (update) {
        compareTheseAssets.push(description);
        console.log(compareTheseAssets);
    } else {
        const index = compareTheseAssets.indexOf(description)
        if (index > -1) {
            compareTheseAssets.splice(index, 1)
        }
        console.log(compareTheseAssets);
    }
};

//////Make compare function visible and handle buttons//////
let compareThisMarker = (checkbox, description) => {
    let compareContainer = document.getElementsByClassName('compare-buttons')[0];
    let compareButtonHTML = '<button class="compare-button asset-button" id="' + description + '">' +
        description +
        '</button>';
    if (checkbox.checked) {
        updateCompareArray(true, description);
        document.getElementById('masterCompareBtn').insertAdjacentHTML("beforebegin",
            compareButtonHTML);
        compareContainer.style.opacity = 1;
        document.getElementById('masterCompareBtn').style.cursor = "pointer";
    } else {
        updateCompareArray(false, description);

        document.getElementById(description).remove();
        if (compareTheseAssets.length == 0) {
            compareContainer.style.opacity = 0.15;
            document.getElementById('masterCompareBtn').style.cursor = "not-allowed";
        }
    }
}

///CHECK the state when popup appears and check it if data says so
let checkboxState = (description) => {
    if (compareTheseAssets.indexOf(description) !== -1) {
        return 'checked';
    } else {
        return '';
    }
}
