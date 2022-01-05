/* eslint-disable no-undef */
var addConnection = document.getElementById("addConnection");
var deleteConnectionAtom = document.getElementById("deleteConnectionAtom");
var getAtomColor = document.getElementById("getAtomColor");
var changeAtomColor = document.getElementById("changeAtomColor");
var colorPicker = document.getElementById("colorPicker");

var pickedAtomStartingPosition = {};
var panelEnabled = true;
var firstElementPicked = false;
var lastPicked = null;

//#region CLICK HANDLING
addConnection.addEventListener("click", () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener("mousedown", getItemStartingPosition);
            item.DOM.addEventListener("mouseup", addConnectionHandler);
        });
        document.body.style.cursor = "cell";
        disablePanel(addConnection);
    }
    else
    {
        atomsList.forEach(item => {
            if(item.DOM.classList.contains("pickedElement"))
                item.DOM.classList = "";
            item.DOM.removeEventListener("mousedown", getItemStartingPosition);
            item.DOM.removeEventListener("mouseup", addConnectionHandler);
        });
        firstElementPicked = false;
        document.body.style.cursor = "default";
        enablePanel(addConnection);
    }
}, true);

deleteConnectionAtom.addEventListener("click", () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener("mousedown", getItemStartingPosition);
            item.DOM.addEventListener("mouseup", deleteAtomHandler);
        });
        connsList.forEach(item => {
            item.DOM.addEventListener("click", deleteConnectionHandler);
        });
        document.body.style.cursor = "no-drop";
        disablePanel(deleteConnectionAtom);
    }
    else
    {
        atomsList.forEach(item => {
            item.DOM.removeEventListener("mousedown", getItemStartingPosition);
            item.DOM.removeEventListener("mouseup", deleteAtomHandler);
        });
        connsList.forEach(item => {
            item.DOM.removeEventListener("click", deleteConnectionHandler);
        });
        document.body.style.cursor = "default";
        enablePanel(deleteConnectionAtom);
    }
}, true);

getAtomColor.addEventListener("click", () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener("mousedown", getItemStartingPosition);
            item.DOM.addEventListener("mouseup", setPickerToAtomColor);
        });
        document.body.style.cursor = "crosshair";
        disablePanel(getAtomColor);
    }
    else
    {
        atomsList.forEach(item => {
            item.DOM.removeEventListener("mousedown", getItemStartingPosition);
            item.DOM.removeEventListener("mouseup", setPickerToAtomColor);
        });
        document.body.style.cursor = "default";
        enablePanel(getAtomColor);
    }
}, true);

changeAtomColor.addEventListener("click", () => {
    if(panelEnabled)
    {
        atomsList.forEach(item => {
            item.DOM.addEventListener("mousedown", getItemStartingPosition);
            item.DOM.addEventListener("mouseup", changeAtomColorHandler);
        });
        document.body.style.cursor = "crosshair";
        disablePanel(changeAtomColor);
    }
    else
    {
        atomsList.forEach(item => {
            item.DOM.removeEventListener("mousedown", getItemStartingPosition);
            item.DOM.removeEventListener("mouseup", changeAtomColorHandler);
        });
        document.body.style.cursor = "default";
        enablePanel(changeAtomColor);
    }
}, true);
//#endregion

//#region HANDLER FUNCTIONS
function getItemStartingPosition(e)
{
    let thisAtom = e.target;
    pickedAtomStartingPosition = {positionTop: thisAtom.offsetTop, positionLeft: thisAtom.offsetLeft};
}

function addConnectionHandler(e) 
{
    let thisAtom = e.target;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        if (!firstElementPicked) 
        {
            thisAtom.classList = "pickedElement";
            lastPicked = thisAtom;
        }
        else 
        {
            if (thisAtom.classList.contains("pickedElement"))
                thisAtom.classList = "";
            else
            {
                if(getAtomById(lastPicked, atomsList).atom.check() < 0 && getAtomById(thisAtom, atomsList).atom.check() < 0)
                    connection(getAtomById(lastPicked, atomsList).atom, getAtomById(thisAtom, atomsList).atom);
                lastPicked.classList = "";
            }
            lastPicked = null;
        }
        firstElementPicked = !firstElementPicked;
    }
}

function deleteAtomHandler(e)
{
    let thisAtom = e.target;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        let deletedAtom = atomsList.splice(getAtomById(thisAtom, atomsList).index, 1)[0];
        thisAtom.remove();

        for(i = 0; i < connsList.length; i++)
        {
            if(connsList[i].parent1.atomId == deletedAtom.atomId || connsList[i].parent2.atomId == deletedAtom.atomId)
            {
                connsList[i].DOM.remove();
                connsList.splice(i, 1);
                i--;
                counter.conns--;
            }
        }

        reduceConnectionIndices();
        reduceAtomIndices();
        counter.atoms--;
    }
}

function deleteConnectionHandler(e)
{
    let thisConnection = e.target;
    let connectionToCheck = getConnectionById(thisConnection, connsList).connection;

    if(connectionToCheck.count == 1)
    {
        let deletedConnection = connsList.splice(getConnectionById(thisConnection, connsList).index, 1)[0];
        deletedConnection.delete();
        thisConnection.remove();
        reduceConnectionIndices();
        counter.conns--;
    }
    else connectionToCheck.changeCount(-1);
}

function setPickerToAtomColor(e)
{
    let thisAtom = e.target;
    let thisAtomObject = getAtomById(thisAtom, atomsList).atom;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
        colorPicker.value = thisAtomObject.color;
}

function changeAtomColorHandler(e)
{
    let thisAtom = e.target;
    let thisAtomObject = getAtomById(thisAtom, atomsList).atom;

    if(movedFewPixels(pickedAtomStartingPosition, thisAtom))
    {
        thisAtom.style.background = colorPicker.value;
        thisAtomObject.color = colorPicker.value;
    }
}
//#endregion

//#region UTIL
function reduceConnectionIndices()
{
    connsList.forEach(function(item, index) {
        if(item.connectionId != index)
        {
            item.DOM.id = "connection_" + index.toString();
            item.connectionId = index;
        }
    });
}

function reduceAtomIndices()
{
    atomsList.forEach(function(item, index) {
        if(item.atomId != index)
        {
            item.DOM.id = "atom_" + index.toString();
            item.atomId = index;
        }
    });

    zIndexReduction();
}

function movedFewPixels(position1, position2)
{
    if(position2.offsetLeft <= position1.positionLeft + 1
        && position2.offsetLeft >= position1.positionLeft - 1
        && position2.offsetTop <= position1.positionTop + 1
        && position2.offsetTop >= position1.positionTop - 1)
        return true;
    else return false;
}

function getAtomById(atom, listOfAtoms)
{
    let resultAtom;
    let resultIndex;
    listOfAtoms.forEach(function(item, index) {
        if(item.DOM.id == atom.id)
        {
            resultAtom = item;
            resultIndex = index;
        }
    });
    return {atom: resultAtom, index: resultIndex};
}

function getConnectionById(connection, listOfConnections)
{
    let resultConnection;
    let resultIndex;
    listOfConnections.forEach(function(item, index) {
        if(item.DOM.id == connection.id)
        {
            resultConnection = item;
            resultIndex = index;
        }
    });
    return {connection: resultConnection, index: resultIndex};
}

function enablePanel(clickedButton)
{
    document.getElementById("menuWrapper").style.pointerEvents = "auto";
    addConnection.style.pointerEvents = "auto";
    deleteConnectionAtom.style.pointerEvents = "auto";
    getAtomColor.style.pointerEvents = "auto";
    changeAtomColor.style.pointerEvents = "auto";
    clickedButton.style.borderColor = "white";
    panelEnabled = true;
}

function disablePanel(clickedButton)
{
    document.getElementById("menuWrapper").style.pointerEvents = "none";
    addConnection.style.pointerEvents = "none";
    deleteConnectionAtom.style.pointerEvents = "none";
    getAtomColor.style.pointerEvents = "none";
    changeAtomColor.style.pointerEvents = "none";
    clickedButton.style.pointerEvents = "auto";
    clickedButton.style.borderColor = "black";
    panelEnabled = false;
}
//#endregion

module.exports.enablePanel = enablePanel;
module.exports.disablePanel = disablePanel;
module.exports.getConnectionById = getConnectionById;
module.exports.getAtomById = getAtomById;