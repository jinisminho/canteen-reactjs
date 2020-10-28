import axios from 'axios'

const instance =axios.create({
    baseURL: 'https://canteen-staff-service-l2vjzfiqea-as.a.run.app/'
})
export default instance;