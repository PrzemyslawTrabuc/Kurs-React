import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID Lu2NFdjphPpnoh6YYwXX_lBH762OyPS37KVvyOBDIK4'
    }

})