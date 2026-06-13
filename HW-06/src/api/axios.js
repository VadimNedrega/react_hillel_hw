import axios from "axios";

export const api = axios.create({
  baseURL: "https://6a1f050cb79eec0d6cf06eab.mockapi.io/api/v1",
});