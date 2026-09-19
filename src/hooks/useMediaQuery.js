import { useState, useEffect } from "react";

export function useMediaQuery(mediaQuery) {
  const [isMediaMatch, setIsMediaMatch] = useState(
    () => window.matchMedia(mediaQuery).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(mediaQuery);
    const mqlHandler = () => setIsMediaMatch(mql.matches);

    mql.addEventListener("change", mqlHandler);
    return () => {
      mql.removeEventListener("change", mqlHandler);
    };
  }, [mediaQuery]);

  return isMediaMatch;
}
