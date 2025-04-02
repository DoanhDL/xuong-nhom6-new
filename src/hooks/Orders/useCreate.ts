import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCreate } from "../../providers/Orders/ordersProvider";


type useCreateParams ={
    resource: string
}

const useCreate = ({resource}:useCreateParams) => {
     const queryClient = useQueryClient();
     return useMutation({
        mutationFn:(variable: any) =>{
            return getCreate({resource, variable})
        },
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey:[resource]
            })
        }
     })
}


export default useCreate;