import axios from "axios";

const searchImages = async () => {
    const id = process.env.REACT_APP_CLIENT_ID;
    const idString = 'Client-ID ' + id;
    

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: idString
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    return response;
};

export default searchImages;