// src/apicalls/users.d.ts
export interface LoginData {
        email: string;
        password: string;
}

export interface DonorData {
        name: string;
        email: string;
        phone: string;
        password: string;
        userType: "donor";
}

export interface HospitalData {
        hospitalName: string;
        email: string;
        address: string;
        phone: string;
        password: string;
        website: string;
        userType: "hospital";
}

export interface CollectorData {
        address: string;
        collectorName: string;
        email: string;
        phone: string;
        password: string;
        website: string;
        userType: "collector";
}

export interface ApiResponse {
        success: boolean;
        message: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?: any;
}

export const LoginUser = async (payload) => { 
    const response = await axiosInstance("post", "/api/users/login", payload)
    return response


};
export const RegisterUser = async (payload) => {
        const response = await axiosInstance("post", "/api/users/registration", payload);
        return response;
};


export const GetLoggedUserInformation = async () => {
        const response = await axiosInstance("get", "/api/users/registration");
        return response;
};


