import { useEffect, useState } from "react";
import { User } from "../models/user";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";
import usersService from "../services/users-service";

const UsersAjaxService = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = usersService.getUsers();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;

        if (err.status == 404) {
          setError("Non ho trovato niente");
        } else {
          setError(err.message);
        }
        setLoading(false);
      });

    return () => cancel();

    // const getUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUsers(res.data);
    //   } catch (error) {
    //     const err = error as AxiosError;

    //     if (err.status == 404) {
    //       setError("Non ho trovato niente");
    //     } else {
    //       setError(err.message);
    //     }
    //   }
    // };
    // getUsers();
  }, []);

  const deleteUser = (id: number) => {
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id != id));

    apiClient.delete("/users/" + id).catch((err: AxiosError) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Pippo" };
    // setUsers([...users, newUser]); // optimistic

    setLoading(true);
    apiClient
      .post<User>("/users", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"> </div>}
      {error && <p className="alert alert-danger"> {error} </p>}
      <button
        className="btn btn-success"
        onClick={addUser}
        disabled={isLoading}
      >
        Nuovo utente
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-danger"
              onClick={() => deleteUser(user.id)}
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersAjaxService;
