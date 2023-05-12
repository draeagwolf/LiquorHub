import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchLiquorsResponse {
  id: number;
  distributor: string;
  name: string;
  type: string;
  producer: string;
  price: number;
  quantity: number;
}

const LiquorGrid = () => {
  const [liquors, setLiquors] = useState<FetchLiquorsResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchLiquorsResponse[]>("/products/")
      .then((res) => setLiquors(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {liquors.map((liquor) => (
        <li id={liquor.id.toString()} key={liquor.id}>
          {liquor.name}
        </li>
      ))}
    </ul>
  );
};

export default LiquorGrid;
