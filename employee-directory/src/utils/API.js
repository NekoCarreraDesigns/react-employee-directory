import axios from "axios"
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "?key=DUM1-N5W4-JCP4-QGP9";
const result = "&results=50";



export default {
    getUsers: function (query) {
        return axios.get(BASEURL + APIKEY + result);
    }


}