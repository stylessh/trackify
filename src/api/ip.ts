import axios from "axios";

let baseURL = "https://api.ipify.org?format=json";

export const getOwnIp = async () => {
  const { data } = await axios.get(baseURL);

  return data.ip;
};
