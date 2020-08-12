import axios from "axios"
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "?key=DUM1-N5W4-JCP4-QGP9";
const result = "&result=10";



export default {
    search: function (query) {
        return axios.get(BASEURL + APIKEY + result);
    }


}