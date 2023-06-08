import axios from 'axios';

const supabaseApi = axios.create({
    baseURL: 'https://jdgnryztebhrejslxhgo.supabase.co/rest/v1',

});

supabaseApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkZ25yeXp0ZWJocmVqc2x4aGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwMTkxMTksImV4cCI6MjAwMTU5NTExOX0.qTHBe5ABgc2OmZB6yKeHZRPgzdeb-6fiLTes06ZmlpQ'
    }
    
    return config;
    
});

export default supabaseApi;