import client from "../index";
export default {
 loginin(data) {
  return client({ method: "POST", url: "login", data });
 },
};
