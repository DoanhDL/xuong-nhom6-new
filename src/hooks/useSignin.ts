import { useMutation } from "@tanstack/react-query";
import { signin } from "../provider/authProvider";

interface SigninParams {
    email: string;
    password: string;
}

export const useSignin = () => {
    return useMutation({
        mutationFn: async ({ email, password }: SigninParams) => {
            const data = await signin({ email, password });
            return data; // Không chỉ trả về token, mà cả response
        },
    });
};
