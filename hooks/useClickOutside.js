import { useEffect } from "react";

const useClickOutside = (ref = [], callback, event = "mousedown") => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (Array.isArray(ref)) {
        ref.forEach((r) => {
          if (r.current && !r.current.contains(event.target)) {
            callback();
          }
        });
      } else {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      }
    }

    document.addEventListener(event, handleClickOutside);
    return () => {
      document.removeEventListener(event, handleClickOutside);
    };
  }, [ref]);

  return;
};

export default useClickOutside;
