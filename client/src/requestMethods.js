import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTFmYmJhZmI5YTIyMDBiZTVkMWU3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjA2OTY0OSwiZXhwIjoxNjcyMzI4ODQ5fQ.C1gy9mRZIfbsDK1Qxbz6WUkplEYzyWMzl1gkPpmsKQw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});