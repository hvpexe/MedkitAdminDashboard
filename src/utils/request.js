import axios from "axios";

const request = axios.create({
  baseURL: "http://ronalbo2610-001-site1.ftempurl.com/api/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  },
});

// request.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token != null) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default request;