import { getStores } from "../../../api/getStores";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteStore } from "../../../api/deleteStore";
import {useState, useRef} from "react";
import UpdateStore from "./UpdateStore";
import { useStore } from "../../../store/store";

const StoresList = () => {

  
  const ref = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const drawerRef = useRef<HTMLInputElement>(null);

  const [id, setId] = useState(0);
  const updateStoreUpdateId = useStore(store => store.updateStoreUpdateId);

  const queryClient = useQueryClient();
  
  const storesQuery = useQuery({
    queryKey: ['stores'],
    queryFn: getStores
  });

  const deleteStoreMutation = useMutation({
    mutationFn: () => {
      return deleteStore(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['stores']
      });
    }
  });

  

  const handleOnClickDelete = (storeId: number) => {
    dialogRef.current?.showModal();
    setId(storeId);
  }

  const handleDelete = () => {
    deleteStoreMutation.mutate();
    ref.current?.click();
  }

  const handleOnClickUpdate = (storeId: number) => {
    updateStoreUpdateId(storeId);
    drawerRef.current?.click();
  }

  const handleCloseDrawer = () => {
    drawerRef.current?.click();
  }

  if(storesQuery.isPending) {
    return <span className="loading loading-ring loading-lg"></span>
  }

  if(storesQuery.isError) {
    return <span>Error: {storesQuery.error.message}</span>
  }

  return (
    <div>
      <p className="text-2xl">Stores list</p>
      <div className="grid grid-cols-6 gap-4">
        {storesQuery.data.map(store => (
          <div key={store.storeId} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <pre>{JSON.stringify(store, null, 2)}</pre>
              <div className="grid grid-cols-2 gap-2">
                <button className="btn btn-xs drawer-button mr-2" onClick={() => handleOnClickUpdate(store.storeId)}>editar</button>
                <button className="btn btn-xs btn-error" onClick={() => handleOnClickDelete(store.storeId)}>eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog ref={dialogRef} id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Advertencia</h3>
          <p className="py-4">Esta seguro de eliminar la tienda?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button ref={ref} className="btn btn-sm mr-2">Cancelar</button>
              
            </form>
            <button onClick={() => handleDelete()} className="btn btn-sm btn-error">Eliminar</button>
          </div>
        </div>
      </dialog>

      <div className="drawer drawer-end">
        <input ref={drawerRef} id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button hidden">Open drawer</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="pt-20 p-4 w-1/5 min-h-full bg-base-100 text-base-content">
            <UpdateStore
              onCloseDrawer={handleCloseDrawer}
            />
          </ul>
        </div>
      </div>
    </div>
  )
};

export default StoresList;