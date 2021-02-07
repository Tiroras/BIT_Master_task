import axios from "axios";


const instance = axios.create({
  baseURL: "http://localhost:4200"
});

export const crewsAPI = {
  getCrews(){
    return instance.get("crews").then(res => {
      return res.data;
    });
  }
}