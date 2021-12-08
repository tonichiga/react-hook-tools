import { useEffect } from "react";

const useClickOutside = (ref, ...rest) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        rest.forEach((fn) => fn());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return;
};

export default useClickOutside;
