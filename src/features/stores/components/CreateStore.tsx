import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStore } from "../../../api/createStore";

const CreateStore = () => {
  const queryClient = useQueryClient();

  const createStoreMutation = useMutation({
    mutationFn: () => {
      return createStore();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['stores']
      });
    }
  });

  return (
    <div>
      <p>create store</p>
    </div>
  )
};

export default CreateStore;