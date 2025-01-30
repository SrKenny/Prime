import axios from 'axios';

// get your api in https://www.themoviedb.org/settings/api
//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/11?api_key=

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
