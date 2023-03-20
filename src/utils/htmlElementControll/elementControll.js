export const enableClickOnElement = (elementId, isEnable) => {
    document.getElementById(elementId).disabled = isEnable;
}
export const showMsg = (elementId, msg, color) => {
    document.getElementById(elementId).innerHTML = "msg";
    document.getElementById(elementId).style.color = color;
}
