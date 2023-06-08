import axios from 'axios';

const supabaseApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_API_SUPABASE,

});

supabaseApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'apikey': import.meta.env.VITE_BASE_APIKEY_API_SUPABASE
    }
    
    return config;
    
});

export default supabaseApi;