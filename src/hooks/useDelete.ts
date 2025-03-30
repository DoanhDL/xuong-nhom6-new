import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDelete } from "../providers/ordersProvider";



type useDeleteParams = {
    resource: string

}

const useDelete = ({resource}: useDeleteParams) => {
    const queryClient = useQueryClient();
    return useMutation({
       mutationFn:(id: number|string) => {
          return getDelete({resource, id});
       },
       onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey:[resource],
        });
       },
    });
}

export default useDelete;