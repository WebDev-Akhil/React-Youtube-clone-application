import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key : 'AIzaSyBxScnSkL2YTK9KRTYpI6YTZ_ZvAXT30ow',
    }
})

//AIzaSyAvRxXQakmkaKXu82Z6oKPYQhCPpPO6wCc
//AIzaSyC17a1QZVN2rwf3ahZ1i2NB5NopGyxkAMU
//AIzaSyC037EZ7e7hjkXjS9yseecizaqv4LAse7o