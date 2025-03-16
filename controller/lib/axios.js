// import axios from "axios";

// const MY_TOKEN = "7708222376:AAFDPg_gqXzR9p8EUv-T6p-T90bzGkeIpnA";
// const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

// const axiosInstance = axios.create({
//     baseURL: BASE_URL,
// });

// export { axiosInstance };


// function getAxiosInstance() {
//     return {
//         get(method, params) {
//             return axios.get(`/${method}`, {
//                 baseURL: BASE_URL,
//                 params,
//             });
//         },

//         post(method, data) {
//             return axios({
//             method: "post",
//             baseURL: BASE_URL,
//             url: `/${method}`,
//             data,
//         });
//     },
// };
// }

// module.exports = {axiosInstance: getAxiosInstance()};

import axios from "axios";

const MY_TOKEN = "7708222376:AAFDPg_gqXzR9p8EUv-T6p-T90bzGkeIpnA";
const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export { axiosInstance };
