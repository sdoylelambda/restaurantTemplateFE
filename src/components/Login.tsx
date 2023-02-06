import React from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik'

interface MyFormValues {
  emailAddress: string
  password: string
}

export const Login: React.FC<{}> = () => {
  const initialValues: MyFormValues = { emailAddress: '', password: '' }
  return (
    <div>
      <h1>Sign in with Existing Account</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
          // Send API request here
        }}
      >
        <Form>
          <label htmlFor='emailAddress'>Email Address</label>
          <Field
            id='emailAddress'
            name='emailAddress'
            placeholder='Email Address'
          />
          <label htmlFor='password'>Password</label>
          <Field id='password' name='password' placeholder='Password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
