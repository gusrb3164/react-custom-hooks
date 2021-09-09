import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
