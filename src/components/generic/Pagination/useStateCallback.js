import { useState, useRef, useEffect } from 'react';

const useStateCallback = (defaultState) => {
  const [value, setValue] = useState(defaultState);
  const callback = useRef();

  const setState = (state, fn) => {
    setValue(state);
    callback.current = fn;
  };

  useEffect(() => {
    if (callback.current) {
      callback.current(value);
    }
  }, [value]);

  return [value, setState];
};

export default useStateCallback;
