const showEvent = (state, { type, payload }) => {
  console.log("State from reducer: ", state);
  console.log("Type: ", type);
  console.log("payload: ", payload);
  switch (type) {
    case "UPDATE_SHOW_EVENT":
      return {
        ...state,
        showEvent: payload,
      };
  }
};

export default showEvent;
