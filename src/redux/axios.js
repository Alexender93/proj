import axios from "axios";
const instance = axios.create({
baseURL: "http://localhost:4444"

})

instance.interceptors.request.use((config) => { // при каждом запросе проверь - есть ли что то в local storage и пришивай єто
config.headers.Authorization = window.localStorage.getItem('token')
return config
})
export default instance