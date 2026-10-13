import { useState, useEffect } from "react";

export default function RateLimitCountdown() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  return (
    <small>
      {seconds > 0 ? `Try again in ${seconds}s` : "Ready. Refresh to retry."}
    </small>
  );
}
