import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);

    async function load() {
      try {
        const res = await fetch(url, {
          headers: { Authorization: "940ac35f-369c-4483-9555-109472ac7f08" },
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
