import { useEffect, useState } from 'react';

const useAuth = <T>(fetcher: Function) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    (async () => {
      try {
        const data = await fetcher();
        setData(data);
      } catch (e) {
        setError(e);
      }
    })();
  }, []);

  return { data, error };
};

export default useAuth;
