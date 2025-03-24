import axios from "axios";

export function getUserInfo(params) {
    return axios({
        url: 'http://106.55.164.57:3000/api/users',
        method: 'GET',
        params
    })
}