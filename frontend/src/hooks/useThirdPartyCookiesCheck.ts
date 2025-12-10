import { useEffect, useState } from "react";

export function useThirdPartyCookieCheck(testUrl: any) {
  const [isEnabled, setIsEnabled] = useState(null);

  useEffect(() => {
    function handleMessage(event: any) {
      if (!event.data || event.data.thirdPartyCookies === undefined) return;
      setIsEnabled(event.data.thirdPartyCookies);
    }

    window.addEventListener("message", handleMessage);

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return isEnabled;
}
