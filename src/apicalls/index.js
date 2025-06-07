
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    }
});

export const axiosInstance = async (method, endpoint, payload = null) => {
    try {
        const response = await instance({
            method,
            url: endpoint, 
            data: payload,
            headers: {

                authorization: `Bearer ${localStorage.getItem("token")}`
            },
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
                response: error?.response,
                data: error.response?.data
            };
        }

        console.error("Axios error:", normalizedError.message);
        throw normalizedError;
    }
};
