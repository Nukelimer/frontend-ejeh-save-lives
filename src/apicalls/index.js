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
                        url: endpoint,
                        data: payload
                });

                return response.data;
        } catch (error) {
                console.error("Axios error:", error.response?.data || error.message);
                throw error; // 🔁 Let the calling function handle the error
        }
};
