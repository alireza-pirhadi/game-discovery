import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '505aaf2b160042bfbb6fcae4a220c991'
    }
})