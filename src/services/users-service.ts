import { User } from "../models/user";
import apiClient from "./api-client";

class UserService {
    getUsers() {
        const controller = new AbortController();

        const request = apiClient
            .get<User[]>("/users", {
                signal: controller.signal
            });

        return { request, cancel: () => controller.abort() }
    }

    deleteUser(id: number) {
        const controller = new AbortController();

        const request = apiClient.delete("/users/" + id, {
            signal: controller.signal
        });

        return { request, cancel: () => controller.abort() }
    }

    addUser(user: User) {
        const controller = new AbortController();

        const request = apiClient.post("/users/", user, {
            signal: controller.signal
        });

        return { request, cancel: () => controller.abort() }
    }
}

export default new UserService();