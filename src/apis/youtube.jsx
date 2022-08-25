import axios from 'axios'

const KEY = 'AIzaSyBHP0a_ZxwptIohGUZVRYZ3alIYdqR9oc8'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY,
    }
});
