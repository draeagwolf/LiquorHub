import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchLiquorsResponse {
  id: number;
  distributor: string;
  name: string;
  type: string;
  producer: string;
  price: number;
  quantity: number;
}

const useLiquors = () => {
  const [liquors, setLiquors] = useState<FetchLiquorsResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchLiquorsResponse[]>("/products/", { signal: controller.signal })
      .then((res) => setLiquors(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { liquors, error };
};

export default useLiquors;
