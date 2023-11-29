import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateStore } from "../../../api/updateStore";
import { useParams } from "react-router-dom";
import { getStoreById } from "../../../api/getStoreById";

const UpdateStore = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const storeQuery = useQuery({
    queryKey: ['stores', params.id],
    queryFn: () => {
      return getStoreById(`${params.id}`);
    }
  });

  const updateStoreMutation = useMutation({
    mutationFn: () => {
      return updateStore();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['stores']
      });
    }
  });

  if(storeQuery.isPending) {
    return <span>Loading...</span>
  }

  if(storeQuery.isError) {
    return <span>Error {storeQuery.error.message}</span>
  }

  return (
    <div>
      <p>Update store</p>
      <button onClick={() => updateStoreMutation.mutate()}>update</button>
    </div>
  )
}

export default UpdateStore;