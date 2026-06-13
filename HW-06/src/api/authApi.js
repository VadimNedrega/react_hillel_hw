import { api } from "./axios";

export const authApi = {
    login: async ({ email, password }) => {
        const res = await api.get("/users");

        const user = res.data.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            throw new Error("Invalid credentials");
        }

        return user;
    },

    register: async (data) => {
        const res = await api.post("/users", data);

        const { password, ...safeUser } = res.data;

        return safeUser;
    }
};