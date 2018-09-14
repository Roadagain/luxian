export const toggleLever = isUp => {
  return {
    type: 'TOGGLE_LEVER',
    isUp: Boolean(isUp),
  };
}
