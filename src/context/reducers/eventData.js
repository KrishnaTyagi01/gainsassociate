// import { UPDATE_PERSONAL_DATA } from "./../../constants/actionTypes/index";

const eventData = (state, { type, payload }) => {
  console.log("State from reducer: ", state);
  console.log("Type: ", type);
  console.log("payload: ", payload);
  switch (type) {
    case "UPDATE_EVENT_DATA":
      return {
        ...state,
        eventInfo: payload,
      };
  }
};

export default eventData;
