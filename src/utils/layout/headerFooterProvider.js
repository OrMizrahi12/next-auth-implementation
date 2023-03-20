import axios from "axios"
import { HEADER_FOOTER_DATA } from "../enpoints/endponts"

export const getHeaderFooter = async () => {

    try {
        const {data} = await axios.get(HEADER_FOOTER_DATA);
        return data;
    } catch (error) {
        console.log(error)
    }
}