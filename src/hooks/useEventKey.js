export function useEventKey(actionKey, handler) {
  const eventKey = (e) => {
    if (e.key === actionKey) {
      e.preventDefault();
      handler();
    }
  };

  return eventKey;
}
