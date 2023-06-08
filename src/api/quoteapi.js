import axios from 'axios';

const quoteApi = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',

});

quoteApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'X-Api-Key': 'VEotY/rC6FQP/IDj+nn17Q==bJqkwxfzIJoY2mZt'
    }
    
    return config;
    
});

export default quoteApi;