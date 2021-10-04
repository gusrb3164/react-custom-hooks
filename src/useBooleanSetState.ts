import { useCallback } from 'react';

const useBooleanSetState = (setState: React.Dispatch<boolean>): [() => void, () => void] => {
  const setTrueState = useCallback(() => {
    setState(true);
  }, []);

  const setFalseState = useCallback(() => {
    setState(false);
  }, []);

  return [setTrueState, setFalseState];
};

export default useBooleanSetState;
