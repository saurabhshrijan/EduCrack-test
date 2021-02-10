import Axios from "axios";
export const LoginAuth = (loginDetails) => {
  return {
    type: "LOGIN",
    details: loginDetails
  };
};
export const LogoutAuth = () => {
  return {
    type: "LOGOUT"
  };
};
export const registeredUsers = () => {
  return (dispatch) => {
    Axios.get("/data/users.json")
      .then((res) => {
        dispatch({ type: "GET_ALL_REGISTERED_USERS", details: res.data.users });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
