import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://canteen-manager-service-l2vjzfiqea-as.a.run.app/'
})
export default instance;