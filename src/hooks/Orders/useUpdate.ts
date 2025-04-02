import { useMutation, useQueryClient } from "@tanstack/react-query"
import { getUpdate } from "../../providers/Orders/ordersProvider"


type useUpdateParams ={
   resource: string
   id: string
}

const useUpdate = ({resource, id}: useUpdateParams) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:(variable: any) => {
            return getUpdate({resource, variable, id});
        },
        onSuccess:() =>{
            queryClient.invalidateQueries({
                queryKey: [resource]
            })
        }
    })

}

export default useUpdate;