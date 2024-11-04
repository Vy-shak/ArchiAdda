import { atom } from "recoil"

export const userAtom = atom({
    default: {
        phoneNo: '',
        username: '',
        password: '',
        fullname: ''
    },
    key: "user"
});

export const errAtominput = atom({
    default: {
        phoneNo: [],
        username: [],
        password: [],
        fullname: []
    },
    key: "inputError"
})