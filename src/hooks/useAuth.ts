import { useMutation } from "@tanstack/react-query";
import { signin, register } from "../provider/authProvider";

export const useSignin = () => {
    return useMutation(signin);
};

export const useRegister = () => {
    return useMutation(register);
};
