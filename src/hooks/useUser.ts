import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "../services/api-client";
import { User } from "../models/user";
import usersService from "../services/users-service";

const useUser = () => {
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
    }, []);

    return { users, error, isLoading, setUsers, setError }
}

export default useUser;