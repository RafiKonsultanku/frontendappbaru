import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    localStorage.clear();
    try {
      const response = await axios.post("/api/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      //   const accessToken = response.data.content.access_token;
      //   const userid = response.data.content.user.id;
      //   window.localStorage.removeItem("user", JSON.stringify(userid));
      //   localStorage.removeItem("token", JSON.stringify(accessToken));
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
