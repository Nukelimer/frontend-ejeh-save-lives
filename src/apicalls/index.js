// import axios from "axios";

// const instance = axios.create({
//         baseURL: "http://localhost:5000", // ✅ Change to your backend port
//         headers: {
//                 "Content-Type": "application/json"
//         }
// });

// export const axiosInstance = async (method, endpoint, payload) => {
//         try {
//                 const response = await instance({
//                         method,
//                         url: `http://localhost:5000${endpoint}`,
//                         data: payload
//                 });

//                 return response.data;
//         } catch (error) {
//             console.log(error, "NNNN");
            
//                 console.error("Axios error:", error.response?.data || error.message);
//                 throw error; // 🔁 Let the calling function handle the error
//         }
// };


// api/index.js or api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    }
});

export const axiosInstance = async (method, endpoint, payload) => {
    try {
        const response = await instance({
            method,
            url: endpoint, // No need to prepend full URL if baseURL is set
            data: payload
        });

        return response.data;
    } catch (error) {
        let normalizedError = error;

        if (axios.isAxiosError(error)) {
            const message =
                typeof error.response?.data === "object" && error.response?.data?.message
                    ? error.response.data.message
                    : error.message;

            normalizedError = {
                ...error,
                message,
                code: error.code,
                status: error.response?.status,
                response: error.response,
                data: error.response?.data
            };
        }

        console.error("Axios error:", normalizedError.message);
        throw normalizedError;
    }
};
