import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getCreate } from "../providers/ordersProvider";

 type useCreateParams = {

    resource: string
 }

const useCreate = ({resource}: useCreateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(dataOrders: any) => {
            return getCreate({resource, dataOrders})
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey:[resource]
            });
        },
    });
    
}

export default useCreate;