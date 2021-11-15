import { RefObject, useLayoutEffect } from 'react';

const useScrollLock = (ref?: RefObject<HTMLElement>) => {
  useLayoutEffect(() => {
    const prevOverflow = ref?.current?.style.overflow || window.getComputedStyle(document.body).overflow;

    if (ref?.current) {
      ref.current.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (ref?.current) {
        ref.current.style.overflow = prevOverflow;
      } else {
        document.body.style.overflow = prevOverflow;
      }
    };
  }, []);
};

export default useScrollLock;
