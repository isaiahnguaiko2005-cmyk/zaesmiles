import { useEffect, useState } from "react";

export function useCountdown(endsAt?: string) {
  const target = endsAt ? new Date(endsAt).getTime() : null;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!target) return;
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!target) return { isActive: false, display: "" };

  const remaining = target - now;
  if (remaining <= 0) return { isActive: false, display: "" };

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const display =
    days > 0
      ? `${days}d ${hours}h ${minutes}m`
      : hours > 0
      ? `${hours}h ${minutes}m ${seconds}s`
      : `${minutes}m ${seconds}s`;

  return { isActive: true, display };
}
