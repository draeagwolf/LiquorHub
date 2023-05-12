import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1/api/",
  headers: {
    Authorization: `Token def650ee321a9bda3973329ee1f99cbdd60c8f7e`,
  },
});
