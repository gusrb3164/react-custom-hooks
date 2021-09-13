import { useCallback, useState } from 'react';

const useLocalStorage = (key: string) => {
  const [value, setValue] = useState<string | null>(localStorage.getItem(key));

  const setStorage = useCallback(
    (value: string) => {
      localStorage.setItem(key, value);
      setValue(value);
    },
    [key],
  );

  const removeStorage = useCallback(() => {
    localStorage.removeItem(key);
    setValue(null);
  }, [key]);

  return { value, setStorage, removeStorage };
};

export default useLocalStorage;
