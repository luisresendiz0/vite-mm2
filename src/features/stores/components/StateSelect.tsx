import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface State {
  stateId: number;
  name: string;
}

const StateSelect: FC<{
  selected: number;
  setSelected: (name: string, value: number) => void;
}> = (props) => {
  const query = useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      try {
        const result = await fetch(import.meta.env.VITE_BASE_URL + "/States");
        const data = await result.json();
        return data as State[];
      } catch (error) {
        console.log(error);
      }
      return [];
    },
  });

  if (query.isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (query.isError) {
    return <span>Error {query.error.message}</span>;
  }

  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">Pick your state</span>
      </div>
      <select
        value={props.selected}
        onChange={(e) =>
          props.setSelected("stateId", Number.parseInt(e.target.value))
        }
        className="select select-bordered w-full"
      >
        <option value={0} disabled>
          Pick one state
        </option>
        {query.data.map((state) => (
          <option key={state.stateId} value={state.stateId}>
            {state.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default StateSelect;
