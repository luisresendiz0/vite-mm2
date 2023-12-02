import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateStore } from "../../../api/updateStore";
import { getStoreById } from "../../../api/getStoreById";
import { useStore } from "../../../store/store";
import { type FC, useState, useEffect } from "react";
import RegionSelect from "./RegionSelect";
import StateSelect from "./StateSelect";

interface UptadeStoreProps {
  onCloseDrawer: () => void;
}

const UpdateStore: FC<UptadeStoreProps> = ({ onCloseDrawer }) => {
  const queryClient = useQueryClient();
  const storeUpdateId = useStore((store) => store.storeUpdateId);

  const storeQuery = useQuery({
    queryKey: ["stores", storeUpdateId],
    queryFn: () => {
      return getStoreById(storeUpdateId);
    },
  });

  const [storeUpdating, setStoreUpdating] = useState({
    name: "",
    location: "",
    regionId: 0,
    stateId: 0,
  });

  const updateStoreMutation = useMutation({
    mutationFn: () => {
      return updateStore(storeUpdating);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stores"],
      });
    },
  });

  const handleOnUpdateStore = () => {
    onCloseDrawer();
    updateStoreMutation.mutate();
  };

  const handleCancel = () => {
    onCloseDrawer();
  };

  const handleInputChange = (name: string, value: string) => {
    setStoreUpdating((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: number) => {
    setStoreUpdating((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (storeQuery.data) {
      setStoreUpdating(storeQuery.data);
    }
  }, [storeQuery.isSuccess, storeQuery.data]);

  if (storeQuery.isPending || !storeUpdating) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (storeQuery.isError) {
    return <span>Error {storeQuery.error.message}</span>;
  }

  return (
    <div>
      <p className="text-xl">Update store</p>
      <pre>{JSON.stringify(storeQuery.data, null, 2)}</pre>
      <div className="grid grid-cols-2 gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Store name</span>
          </div>
          <input
            type="text"
            placeholder="Store name"
            name="name"
            className="input input-bordered w-full"
            value={storeUpdating.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="input input-bordered w-full"
            value={storeUpdating.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </label>
        <RegionSelect
          selected={storeUpdating.regionId}
          setSelected={handleSelectChange}
        />

        <StateSelect
          selected={storeUpdating.stateId}
          setSelected={handleSelectChange}
        />
        <div className="">
          <button onClick={handleCancel} className="btn btn-sm mr-2">
            cancel
          </button>
          <button
            onClick={handleOnUpdateStore}
            className="btn btn-sm btn-error"
          >
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateStore;
