import axios from 'axios';

const instance = axios.create({
    baseURL:'https://api.hnpwa.com/v0'
})

const fetchListItem = (pageName) => {
    return instance.get(`${pageName}/1.json`)
}

export{
    fetchListItem,
}
