import React from 'react';
import { Formik, Form,  Field, ErrorMessage } from 'formik';
    import { registerSchema } from '../../helpers/validation';
    
const RegisterForm = () => {
    return (
        <Formik initialValues={{ 
            firstName:'' ,
         lastName:'',
          email:'',
          password:'',
          confirmPassword:'', }}
          onSubmit={(values)=>{
            localStorage.setItem('user', JSON.stringify({
                firstName:values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password, 
            }))
            
          }} validationSchema = {registerSchema}>
{
    ()=>{
        return(
            <Form>
<label>
    <Field type='text' name='firstName' placeholder='Your first name' ></Field>
    <ErrorMessage name='firstName' component='div'></ErrorMessage>
</label>
<label>
    <Field type='text' name='lastName' placeholder='Your last name' ></Field>
    <ErrorMessage name='lastName' component='div'></ErrorMessage>
</label>
<label>
    <Field type='email' name='email' placeholder='Your email' ></Field>
    <ErrorMessage name='email' component='div'></ErrorMessage>
</label>
<label>
    <Field type='password' name='password' placeholder='Your password' ></Field>
    <ErrorMessage name='password' component='div'></ErrorMessage>
</label>
<label>
    <Field type='password' name='confirmPassword' placeholder='Confrirm your password' ></Field>
    <ErrorMessage name='confirmPassword' component='div'></ErrorMessage>
</label>
<button type='submit'>Register</button>
            </Form>
        )
    }
}
        </Formik>
       
    );
}

export default RegisterForm;
