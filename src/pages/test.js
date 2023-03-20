import { AppContext } from "@/components/context/contect"
import Popup from "@/components/Popup/Popup"
import { playPopUp } from "@/logic/popupLogic/popupLogic"
import { useContext } from "react"

export default function Test() {
    
    const {setShowPopup} = useContext(AppContext)
    return <div>
       <Popup  />
        <button value={"Get"} onClick={() => playPopUp(setShowPopup,1000)} />
    </div>
}
