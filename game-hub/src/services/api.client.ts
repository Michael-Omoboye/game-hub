import axios from "axios";

export default axios.create({
    baseURL :"https://api.rawg.io/api",
    params: {
        key:'fb7a76fc79df4b88ac8ef5608941e052'
    }
})