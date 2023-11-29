import { getStores } from "../../../api/getStores";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteStore } from "../../../api/deleteStore";

const StoresList = () => {

  const queryClient = useQueryClient();
  
  const storesQuery = useQuery({
    queryKey: ['stores'],
    queryFn: getStores
  });

  const deleteStoreMutation = useMutation({
    mutationFn: () => {
      return deleteStore();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['stores']
      });
    }
  });

  if(storesQuery.isPending) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if(storesQuery.isError) {
    return <span>Error: {storesQuery.error.message}</span>
  }

  return (
    <div>
      <p>Stores list</p>
      <p>{JSON.stringify(storesQuery.data)}</p>
    </div>
  )
};

export default StoresList;