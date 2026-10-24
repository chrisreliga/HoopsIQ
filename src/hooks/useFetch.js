import { useQuery } from "@tanstack/react-query";

export default function useFetch(url) {
  const { data, isPending, error } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await fetch(
        `/.netlify/functions/nba-api?path=${encodeURIComponent(url)}`,
      );
      if (!res.ok) {
        const err = new Error(`Request failed: ${res.status}`);
        err.status = res.status;
        throw err;
      }
      return res.json();
    },

    staleTime: 1000 * 60 * 60,
    retry: (failureCount, err) => err.status !== 429 && failureCount < 2,
  });

  return { data, loading: isPending, error, status: error?.status };
}
