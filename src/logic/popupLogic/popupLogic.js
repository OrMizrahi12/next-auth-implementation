export const playPopUp = (setShowPopup, time) => {
    setShowPopup(true);
    setTimeout(() => {
        setShowPopup(false);
    }, time);
}