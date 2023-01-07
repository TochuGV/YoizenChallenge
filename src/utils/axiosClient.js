import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://run.mocky.io',
});

export default axiosClient;