import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getDeleteOne } from "../../providers/Orders/ordersProvider";


type useDeleteParams ={
    resource: string
}

const useDelete = ({resource}: useDeleteParams) =>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(id: string) =>{
            return getDeleteOne({resource, id});

        },
        onSuccess: () =>{
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })

}

export default useDelete;