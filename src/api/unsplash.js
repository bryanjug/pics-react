import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lodzye22nu19XS8NhRBfZszQPfLr-6m0nvuIxb3yxEg'
    }
});