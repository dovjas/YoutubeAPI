import axios from 'axios'

axios.create({
    baseUrl:'https://www.googleapis.com/youtube/v3',
    params:{
        'part':'snipet',
        'maxResults':10,
        key:KEY,
        
    }
})
const KEY = 'AIzaSyBHP0a_ZxwptIohGUZVRYZ3alIYdqR9oc8'


export default axios 