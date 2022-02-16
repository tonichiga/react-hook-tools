import { useEffect } from "react";
import { storage } from "./storage";

const useEvents = (isRegistered = false) => {
  useEffect(() => {
    alt.on("event", (event, ...data) => {
      if (storage[event] !== undefined) {
        isRegistered &&
          console.log("EVENT IN STORAGE", JSON.stringify(storage[event]));
        storage[event](...data);
      } else {
        isRegistered && console.log("EVENT NOT FOUND", event);
      }
    });

    // eslint-disable-next-line
  }, []);

  return null;
};

export default useEvents;
