import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 0825bd3e5288b622a7569ba3675a4a22034725547f238bee2fe43fb8b9fb49ed'
    }
});