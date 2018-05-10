export default (state = null, action) => {
  if (action.type === 'CONNECT_STREAM') {
    return action.value;
  }

  return state;
};
