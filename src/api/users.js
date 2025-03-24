import axios from "axios";

export function getUserInfo(params) {
    return axios({
        url: 'http://localhost:3000/api/users',
        method: 'GET',
        params
    })
}