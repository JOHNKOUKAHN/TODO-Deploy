import axios from 'axios';


const quoteApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API_NINJA,

});

quoteApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'X-Api-Key': import.meta.env.VITE_BASE_APIKEY_API_NINJA
    }
    
    return config;
    
});

export default quoteApi;