export const storageBase = {};
const maizen = {
  on: (event, handler) => {
    storageBase[event] = handler;
  },
};

export default maizen;
