import client from "../index";
export default {
 list(page = 1) {
  return client({ method: `GET`, url: `users?page=${page}` });
 },
};
