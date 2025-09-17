// hooks/useLocationDetail.js
'use client';
import { useEffect, useState } from 'react';

export const useLocationDetail = () => {
  const [countryCode, setCountryCode] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctl = new AbortController();

    (async () => {
      try {
        // Call your local API route (works in both App & Pages routers)
        const r = await fetch('/api/geo', { cache: 'no-store', signal: ctl.signal });
        if (!r.ok) throw new Error('geo failed');
        const j = await r.json();
        setCountryCode(j?.country ?? null);
        setCountryData(j);
      } catch (e) {
        // Last-resort fallback in the browser
        try {
          const r2 = await fetch('https://ipwho.is/', { cache: 'no-store', signal: ctl.signal });
          const j2 = await r2.json();
          setCountryCode(j2?.country_code ?? null);
          setCountryData(j2);
        } catch {
          setCountryCode(null);
          setCountryData(null);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => ctl.abort();
  }, []);

  return { countryCode, countryData, loading };
};
