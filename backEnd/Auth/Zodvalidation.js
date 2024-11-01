import z from "zod"



export const val = z.object({
    phoneNo: z.string.superRefine((val, ctx) => {
        if (val.toString().length < 10) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "phone number is not valid"
            })
        }
    }),
    username: z.string().min(4).max(16),
    fullname: z.string().min(4).max(26),
    password: z.string().min(5).max(16).superRefine((val, ctx) => {
        const regxnum = /^\d+$/;
        if (!regxnum.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "add numbers to your password"
            })
        };
        const regxspl = /[!@#$]/;
        if (!regxspl.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "add special character to your password"
            })
        };
    })
})