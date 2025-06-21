import { create } from "zustand"

interface userData {
    username: string,
    email: string,
    profilePicture: string
}

interface UserStore {
    userData?: userData

    getUserInfo: (userId: number) => void,
    updateUser: (data: userData) => void,
    removeUser: (userId: number) => void,
}

const useUserStore = create<UserStore>()((set) => ({
    userData: {
        username: "",
        email: "",
        profilePicture: ""
    },

    // Skip
    getUserInfo: (userId) => {
        return
    },

    updateUser(data) {

        set({
            userData: data
        })

        return
    },

    removeUser(userId) {
        return
    },
}))

export default useUserStore