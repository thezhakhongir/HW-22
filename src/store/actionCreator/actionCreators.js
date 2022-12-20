import axios from "axios";

export const getData = (data) => {
  return {
    type: "GET",
    data: data,
  };
};

export const asyncSendRequest = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch(getData(data));
    return data;
  };
};

export const postDataToServer = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const deleteData = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
