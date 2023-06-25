import axios from "axios";

let base_url = process.env.REACT_APP_BACKEND_URL;

export const exploreCars = async (data) => {
  try {
    let resp = await axios.post(`${base_url}/getCarsData`, {
      letter: data,
    });

    return resp;
  } catch (error) {
    console.log("error==> ", error);
  }
};
