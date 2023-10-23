import axios from "axios";

const searchImages = async (term) => {
    const id = process.env.REACT_APP_CLIENT_ID;
    const idString = 'Client-ID ' + id;

    

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: idString,
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;