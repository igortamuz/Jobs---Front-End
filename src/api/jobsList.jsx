import axios from "axios";
import config from "../config.json";

const BASE_URL = config.BASE_URL || "http://localhost:4000/";

export async function getAllJobsList() {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    // console.log(error);
    // alert(error.message);
    // throw error;
  };
};

