import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef } from "react";

const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  time = 1000,
): (() => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, time);
  }, [time]);

  return debouncedCallback;
};

export default useDebounce;
