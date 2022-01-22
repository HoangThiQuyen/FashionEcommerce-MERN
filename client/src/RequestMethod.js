import axios from "axios";

const BASE_URL = "http://localhost:7000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTRkMWM5NjVkMTQ5YWEwZGM3YTJhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjg1ODgxOCwiZXhwIjoxNjQzMTE4MDE4fQ.YdOhmttdqYBdVUH4J4LFTD0fxGVHn6bG8SZcWEsOF04";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: "Bearer " + TOKEN },
});
