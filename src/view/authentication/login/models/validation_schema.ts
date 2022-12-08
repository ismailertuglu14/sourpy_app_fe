import * as Yup from "yup"

export const validationSchema = Yup.object({
    sourpy_username: Yup.string().required("Username required").min(4),
    sourpy_password: Yup.string().required("Password required").min(6),
});