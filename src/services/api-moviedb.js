import axios from "axios";

/* using axios to create a reference to the api's endpoint and configuring also the use of the API KEY  */

/* our enviroment variable with the API key was defined in the file .env, to acess it you need to use process.env.VARIABLE.NAME */
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apiKey };
