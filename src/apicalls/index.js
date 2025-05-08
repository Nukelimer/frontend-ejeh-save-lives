import axios from "axios";

const instance = axios.create({
        baseURL: "http://localhost:5000", // ✅ Change to your backend port
        headers: {
                "Content-Type": "application/json"
        }
});

export const axiosInstance = async (method, endpoint, payload) => {
        try {
                const response = await instance({
                        method,
                        url: `http://localhost:5000${endpoint}`,
                        data: payload
                });

                return response.data;
        } catch (error) {
                console.error("Axios error:", error.response?.data || error.message);
                throw error; // 🔁 Let the calling function handle the error
        }
};

// const BASE_URL = "http://localhost:5000";

// export const axiosInstance = async (method, endpoint, payload) => {
//   try {
//     const response = await axios({
//       method,
//       url: `${BASE_URL}${endpoint}`,
//       data: payload,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Axios error:", error.response?.data || error.message);
//     throw error;
//   }
// };