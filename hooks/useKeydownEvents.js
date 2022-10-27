import { useEffect } from "react";

const useKeydownEvents = (cb, actions = ["enter"], eventName = "keydown") => {
  const keyCode = {
    esc: 27,
    enter: 13,
  };

  function comparsion(e, key) {
    if (e.keyCode === keyCode[key] && e.shiftKey == false) {
      return true;
    }

    return false;
  }

  useEffect(() => {
    function handleKeydown(e) {
      if (Array.isArray(cb)) {
        console.log(cb);

        cb.forEach(({ handler, event }) => {
          if (comparsion(e, event)) {
            handler();
          }
        });
        return;
      }

      actions.forEach((event) => {
        if (comparsion(e, event)) {
          cb();
        }
      });
    }

    window.addEventListener(eventName, handleKeydown);

    return () => {
      window.removeEventListener(eventName, handleKeydown);
    };

    // eslint-disable-next-line
  }, [cb]);
};

export default useKeydownEvents;
