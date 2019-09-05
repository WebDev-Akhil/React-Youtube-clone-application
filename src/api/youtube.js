import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBw2Vf2KlbKUnEpiUlmtGXON1Fy0RHCHHw'
    }
})