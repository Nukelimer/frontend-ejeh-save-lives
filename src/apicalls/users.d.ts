// src/apicalls/users.d.ts
export interface DonorData {
        donorName: string;
        donorEmail: string;
        donorAddress: string;
        donorPhone: string;
        donorAge: string;
        donorPassword: string;
        userType?: string; // Optional, to indicate user type
}

export interface HospitalData {
        hospitalName: string;
        hospitalEmail: string;
        hospitalAddress: string;
        hospitalPhone: string;
        hospitalPassword: string;
        userType?: string;
}

export interface CollectorData {
        collectorName: string;
        collectorEmail: string;
        collectorAddress: string;
        collectorPhone: string;
        collectorAge: string;
        collectorPassword: string;
        userType?: string;
}

export interface LoginData {
        email: string;
        password: string;
}

export interface ApiResponse {
        success: boolean;
        message: string;
        data?: unknown;
        // data?: any; // Adjust based on your backend response (e.g., { userId, token })
}

export const LoginUser: (payload: LoginData) => Promise<ApiResponse>;
export const RegisterUser: (
        payload: DonorData | HospitalData | CollectorData
) => Promise<ApiResponse>;
