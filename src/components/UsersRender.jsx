import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  asyncSendRequest,
  deleteData,
  postDataToServer,
} from "../store/actionCreator/actionCreators";

const UsersRender = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.login);

  const getDataFromServer = async () => {
    const result = await dispatch(asyncSendRequest());

    const iteration = result.filter((el) => {
      return el.id % 2 == -0;
    });

    localStorage.setItem("data", JSON.stringify(iteration));
  };

  useEffect(() => {
    deleteDataHandler();
  }, []);

  const deleteDataHandler = (id) => {
    dispatch(deleteData(id));
    localStorage.removeItem("data");
  };

  const postToServer = () => {
    const data = {
      title: users,
    };

    dispatch(postDataToServer(data))
      .then(() => {
        toast.success("Succes!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <button onClick={getDataFromServer}>Get Data</button>
      <button onClick={postToServer}>Post Data</button>
      <button onClick={() => deleteDataHandler(users.id)}>Delete Data</button>
      <h1>Для удаления с UI ,надо обновить страницу!</h1>
      {users.map((data) => {
        return (
          <div key={data.id}>
            <li>{data.id}</li>
            <li>{data.name}</li>
          </div>
        );
      })}
    </div>
  );
};

export default UsersRender;
