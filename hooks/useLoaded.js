import { useState } from "react";

const useLoaded = ({ defaultLoadingState = false }) => {
  const [isLoading, setIsLoading] = useState(defaultLoadingState);

  const emitFetching = (callback) => {
    setIsLoading(true);
    callback?.();
  };

  const emitLoaded = (callback) => {
    setIsLoading(false);
    callback?.();
  };

  return {
    emitFetching,
    emitLoaded,
    isLoading,
  };
};

export default useLoaded;
