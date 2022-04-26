// import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    // const response = await axios.get("/api/refresh", {
    //   withCredentials: true,
    // });
    const response = JSON.parse(localStorage.getItem("token"));
    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.content.access_token);
      return {
        ...prev,
        accessToken: response.data.content.access_token,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
