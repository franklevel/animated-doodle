import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

async function search(query: string) {
  return axios.get(`${API_BASE_URL}/search/shows?q=${query}`);
}

async function show(showId: number) {
  return axios.get(`${API_BASE_URL}/shows/${showId}`);
}

async function shows(page: number = 1) {
  return axios.get(`${API_BASE_URL}/shows?page=${page}`);
}

export default { search, show, shows };
