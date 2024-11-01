import { atom } from "recoil"

export const userAtom = atom({
    default: {
        phoneNo: '',
        username: '',
        password: '',
        fullname: ''
    },
    key: "user"
})