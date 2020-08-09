import axios from "axios"
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "DUM1-N5W4-JCP4-QGP9";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }


}