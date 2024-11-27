import * as Yup from 'yup';


const nameSchema = Yup.string().trim().min(3).max(20).required();

export const registerSchema = Yup.object({
    firstName: nameSchema,
    lastName: nameSchema,
     email:nameSchema,
     password:Yup.string().trim().min(6).required(),
     confirmPassword:Yup.string().oneOf([Yup.ref('password')]).required(),
})