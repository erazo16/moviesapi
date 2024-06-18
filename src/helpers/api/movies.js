import axios from "axios"

export const getMoviesApi = async (name, page) => {
    try {
        const response = await axios(`http://www.omdbapi.com/?s=${name}&apikey=18eaeb4f&page=${page}`, {
            method : "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        console.log("RESPONSE GET", response);
        const data = response;
        console.log("DATA INFORMATION", data);
        return data
    } catch (error) {
        console.log("ERROR API getInfo :", error);
    }
}

export const getDetailsMovie = async (id) => {
    try {
        const response = await axios(`http://www.omdbapi.com/?i=${id}&apikey=18eaeb4f&`, {
            method : "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        console.log("RESPONSE GET ID", response);
        const data = response;
        console.log("DATA INFORMATION ID", data);
        return data
    } catch (error) {
        console.log("ERROR API getInfo :", error);
    }
}
