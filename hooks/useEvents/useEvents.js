import { useEffect } from "react";
import { storageBase } from "./storage";

const useEvents = (isRegistered = false) => {
  useEffect(() => {
    alt.on("event", (event, ...data) => {
      if (storageBase[event] !== undefined) {
        isRegistered &&
          console.log("EVENT IN STORAGE", JSON.stringify(storageBase[event]));
        storageBase[event](...data);
      } else {
        isRegistered && console.log("EVENT NOT FOUND", event);
      }
    });

    // eslint-disable-next-line
  }, []);

  return null;
};

export default useEvents;
