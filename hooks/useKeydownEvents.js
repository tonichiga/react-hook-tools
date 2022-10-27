import { useEffect } from "react";

const useKeydownEvents = (cb, actions = ["enter"], eventName = "keydown") => {
  const keyCode = {
    esc: 27,
    enter: 13,
  };

  useEffect(() => {
    function handleKeydown(e) {
      actions.forEach((key) => {
        if (e.keyCode === keyCode[key] && e.shiftKey == false) {
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
