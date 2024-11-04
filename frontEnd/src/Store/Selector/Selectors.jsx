import { selector } from "recoil";
import { errAtominput } from "../Atoms/Userinfo";


const PHnoerr = selector({
    key: "PhNoselctor",
    get: function ({ get }) {
        const err = get(errAtominput);
        const errorph = err.phoneNo[0];
        return errorph
    }
})