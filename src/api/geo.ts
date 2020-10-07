import axios from "axios";

let baseURL =
  "https://geo.ipify.org/api/v1?apiKey=at_sy0xFIOaow2QdfaDhve3OrOTnQXeh";

export const getGeoInformation = async (ip: string) => {
  const { data } = await axios.get(`${baseURL}&ipAddress=${ip}&domain=${ip}`);

  return data;
};
