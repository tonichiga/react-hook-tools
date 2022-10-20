import { useEffect } from "react";

const useClickOutside = (ref = [], callback, event = "mousedown") => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (Array.isArray(ref)) {
        ref.forEach(({ current }) => {
          if (Array.isArray(current)) {
            if (
              current[0] &&
              current[1] &&
              !current[0].contains(event.target) &&
              !current[1].contains(event.target)
            ) {
              closeModals();
            }
          } else {
            if (current && !current.contains(event.target)) {
              closeModals();
            }
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
