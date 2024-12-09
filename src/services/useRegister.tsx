import { useMutation } from "@tanstack/react-query";
import axiosInstance from '../../config/axios'
import { number } from "zod";

export type THospital = {
    name:string;
    bio: string;
    termsAccepted:boolean;
    location: string;
    level: string;
    email: string
}
export type TDoctors = {
    username: string;
    password: string;
    email: string;
    name: string;
}

export type TManagers = {
    username: string;
    password: string;
    email: string;
    name: string;
}
const useHospitalRegistration = () => {
    return useMutation({
        mutationKey: ["Hospital_Register"],
        mutationFn: (formData: THospital) => axiosInstance.post<{message: string, id: number | string}>('/hospitals', formData).then((res) => res.data)
    })
}

const useDoctorsRegistration = () => {
    return useMutation({
        mutationKey: [" Doctor_Register"],
        mutationFn: (formData: THospital[]) => axiosInstance.post("/register/doctor", formData). then(res => res.data)
    })
}

const useManagerRegistration = () => {
    return useMutation({
        mutationKey: ["Manager_Register"],
        mutationFn: (formData: TManagers[]) => axiosInstance.post("/register/manager", formData).then(res => res.data)
    })
}
 
export default useHospitalRegistration
export {
    useDoctorsRegistration,
    useManagerRegistration 
}