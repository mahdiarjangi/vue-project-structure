import { defineStore } from "pinia";

export const useUsersStore = defineStore({
    id: "users",
    state: () => ({
        users: [],
    }),
    getters: {
        getUsers: (state) => {
            return state.users;
        },
    },
    actions: {
        async fetchUsers() {
            let response;

            try {
                response = new Promise((resolve, reject) => {
                    resolve([
                        {
                            id: 1,
                            name: "John Doe",
                            email: "johndoe@mail.com",
                        },
                    ]);
                    reject();
                });
            } catch (error) {
                throw new Error(error);
            }

            response.then((result) => {
              this.users = result;
            })

            return response
        },
    },
});
