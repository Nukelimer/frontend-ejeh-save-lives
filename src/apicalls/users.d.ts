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

export const LoginUser: (payload: LoginData) => Promise<{ data: ApiResponse }>;
export const RegisterUser = async (payload) => {
        const response = await axiosInstance("post", "/api/users/registration", payload);
        return response;
};



