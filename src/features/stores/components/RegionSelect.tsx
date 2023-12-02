import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

interface Region {
  regionId: number;
  name: string;
  description: string;
}

const RegionSelect: FC<{
  selected: number;
  setSelected: (name: string, value: number) => void;
}> = (props) => {
  const query = useQuery({
    queryKey: ["regions"],
    queryFn: async () => {
      try {
        const result = await fetch(import.meta.env.VITE_BASE_URL + "/Regions");
        const data = await result.json();
        return data as Region[];
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
        <span className="label-text">Pick your region</span>
      </div>
      <select
        value={props.selected}
        onChange={(e) =>
          props.setSelected("regionId", Number.parseInt(e.target.value))
        }
        className="select select-bordered w-full"
      >
        <option value={0} disabled>
          Pick one region
        </option>
        {query.data.map((region) => (
          <option key={region.regionId} value={region.regionId}>
            {region.name} - {region.description}
          </option>
        ))}
      </select>
    </label>
  );
};

export default RegionSelect;
