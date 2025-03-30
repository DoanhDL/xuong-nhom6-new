import { useQuery } from "@tanstack/react-query"
import { getListOne } from "../providers/ordersProvider"


type useOneParams ={
  resource: string
  id: number| string
}

const useOne = ({resource,id}: useOneParams) => {
  return useQuery({
    queryKey:[resource,id],
    queryFn: () => getListOne({resource, id}),
  })
}

export default useOne;