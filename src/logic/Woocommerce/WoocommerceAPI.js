import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { WC_CONSUMER_KEY, WC_CONSUMER_SECRET } from "../../utils/enpoints/endponts";

export const api = new WooCommerceRestApi({
    url: "https://react.tal-mizrahi.co.il/",
    consumerKey: WC_CONSUMER_KEY,
    consumerSecret: WC_CONSUMER_SECRET,
    version: "wc/v3"
});

