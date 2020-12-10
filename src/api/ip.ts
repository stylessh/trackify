import axios from "axios";

let baseURL = "https://api.ipify.org?format=json";

export const getOwnIp = async (): Promise<string> => {
  const { data } = await axios.get(baseURL);

  return data.ip;
};
