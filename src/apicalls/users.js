import { axiosInstance } from "./index";


// export const LoginUser = async (payload) => {
//         const response = await axiosInstance("post", "/api/users/login", payload);

//         return response;
// };


export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance("post", "/api/users/login", payload);
    return response; // Expect { success: boolean, message?: string, data?: any }
  } catch (error) {
    throw error; // Pass through the error from axiosInstance
  }
};


export const RegisterUser = async (payload) => {
        const response = await axiosInstance("post", "/api/users/registration", payload);

    console.log(response, "____");
    return response;
    
};
