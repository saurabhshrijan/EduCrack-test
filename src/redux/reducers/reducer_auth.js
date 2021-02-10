const initialState = {
  registeredUsers: [],
  currentUser: {}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_REGISTERED_USERS":
      return {
        ...state,
        registeredUsers: action.details
      };
    case "LOGIN":
      return {
        ...state,
        currentUser: action.details
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: {}
      };
    default:
      return { ...state };
  }
}
