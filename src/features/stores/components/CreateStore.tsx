import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createStore } from "../../../api/createStore";
import { useRef } from "react";

const CreateStore = () => {
  const ref = useRef<HTMLButtonElement>(null);
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

  const handleDelete = () => {
    ref.current?.click();
  }

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Advertencia</h3>
          <p className="py-4">Esta seguro de eliminar la tienda?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button ref={ref} className="btn btn-sm mr-2">Cancelar</button>
              
            </form>
            <button onClick={handleDelete} className="btn btn-sm btn-error">Eliminar</button>
          </div>
        </div>
      </dialog>
    </>
  )
};

export default CreateStore;