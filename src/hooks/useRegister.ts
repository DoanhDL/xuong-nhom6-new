import { useMutation } from "@tanstack/react-query";
import { register } from "../provider/authProvider";

interface RegisterParams {
    email: string;
    password: string;
}

export const useRegister = () => {
    return useMutation({
        mutationFn: async ({ email, password }: RegisterParams) => {
            return await register({ email, password });
        },
    });
};
