import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getUpdate } from "../providers/ordersProvider"

type useUpdateParams ={
    resource: string
    id: number | string
}


const useUpdate = ({resource, id}: useUpdateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(dataOrders: any) => {
             return getUpdate({resource,dataOrders,id})
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey:[resource]
            })
        }
    })
}

export default useUpdate;