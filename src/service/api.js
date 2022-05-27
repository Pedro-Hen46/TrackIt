import axios from "axios";

export const api = axios.create({ 
    baseURL: 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'

})
const token = localStorage.getItem('@token')
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

