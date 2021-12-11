const useSubmitOnEnter = (func) => {
  const handleKeyDown = (e, item, id) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      func();
    }
  };

  return handleKeyDown;
};

export default useSubmitOnEnter;
