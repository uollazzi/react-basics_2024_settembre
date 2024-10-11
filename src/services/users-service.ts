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
}

export default new UserService();