import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateStore } from "../../../api/updateStore";
import { getStoreById } from "../../../api/getStoreById";
import { useStore } from "../../../store/store";
import {type FC, useState} from "react";

interface UptadeStoreProps {
  onCloseDrawer: () => void;
}

const UpdateStore: FC<UptadeStoreProps> = ({ onCloseDrawer }) => {
  const queryClient = useQueryClient();
  const storeUpdateId = useStore(store => store.storeUpdateId);

  const storeQuery = useQuery({
    queryKey: ['stores', storeUpdateId],
    queryFn: () => {
      return getStoreById(storeUpdateId);
    }
  });

  const [storeUpdating, setStoreUpdating] = useState(storeQuery.data);

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

  const handleOnUpdateStore = () => {
    onCloseDrawer();
    updateStoreMutation.mutate()
  }

  const handleCancel = () => {
    onCloseDrawer();
  }

  if(storeQuery.isPending) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if(storeQuery.isError) {
    return <span>Error {storeQuery.error.message}</span>
  }

  return (
    <div>
      <p className="text-xl">Update store</p>
      <pre>{JSON.stringify(storeQuery.data, null, 2)}</pre>
      <div className="grid grid-cols-2 gap-2">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Store name</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" value={storeUpdating.name} />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </label>
      </div>
      <div className="mt-4">
        <button onClick={handleCancel} className="btn btn-sm mr-2">cancel</button>
        <button onClick={handleOnUpdateStore} className="btn btn-sm btn-error">update</button>
      </div>
    </div>
  )
}

export default UpdateStore;