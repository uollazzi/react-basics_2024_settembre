import useUser from "../hooks/useUser";

const UsersAjaxHook = () => {
  const { users, error, isLoading } = useUser();

  return (
    <>
      {isLoading && <div className="spinner-border"> </div>}
      {error && <p className="alert alert-danger"> {error} </p>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersAjaxHook;
