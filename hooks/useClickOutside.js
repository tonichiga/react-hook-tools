import { useEffect } from "react";

const useClickOutside = (ref = [], callback, event = "mousedown", logger) => {
  useEffect(() => {
    logger && console.log({ ref, callback, event });
    function handleClickOutside(event) {
      if (Array.isArray(ref)) {
        ref.forEach((childRef) => {
          if (Array.isArray(childRef)) {
            if (
              childRef[0].current &&
              childRef[1].current &&
              !childRef[0].current.contains(event.target) &&
              !childRef[1].current.contains(event.target)
            ) {
              callback();
            }
          } else {
            if (childRef.current && !childRef.current.contains(event.target)) {
              callback();
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
