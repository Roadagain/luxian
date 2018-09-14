const lever = (state = { isUp: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_LEVER':
      return {
        isUp: !Boolean(action.isUp),
      };
    default:
      return state;
  }
}

export default lever;
