import axios from "axios";
const giphyHost = "https://api.giphy.com/v1/gifs";
const apiKey = "BhEB2InhZbmP96xsZoWBz15voVYxA47a";

export default {
    // Gets all books
    getRandomPicture: function (searchTerm) {
        return axios.get(`${giphyHost}/random?api_key=${apiKey}&tag=${searchTerm}`);
    }
};
