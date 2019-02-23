import axios from "axios";
//this exports the whole object 
export default {
    newDogImage: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },

    breedList: function() {
        return axios.get("https://dog.ceo/api/breeds/list");
    }
}