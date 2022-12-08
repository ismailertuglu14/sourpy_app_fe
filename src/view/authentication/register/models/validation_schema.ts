import * as Yup from "yup"

export const validationSchema = Yup.object({
    sourpy_name: Yup.string().required("Name required").min(3),
    sourpy_lastname: Yup.string().required("Lastname required").min(3),
    sourpy_username: Yup.string().required("Username required").min(4),
    sourpy_email: Yup.string().email("Not a proper email"),
    sourpy_password: Yup.string().required("Password required").min(6),
    sourpy_password_again: Yup.string().oneOf([Yup.ref('sourpy_password'),null],'Passwords doesnt\'t match')
})