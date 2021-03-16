import axios from "axios";

export const API_URL = "https://jsonplaceholder.typicode.com/";




export async function apiGetArticles(currpage){
    return axios.get(API_URL+"posts");
}
