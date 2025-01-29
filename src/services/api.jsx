import axios from 'axios';

//Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/11?api_key=259200299a990976070675ccb9fd1ca4

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;