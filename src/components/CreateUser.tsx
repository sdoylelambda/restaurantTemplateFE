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
  firstName: string
}

export const CreateUser: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '' }
  return (
    <div>
      <h1>My Example</h1>
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
          <label htmlFor='firstName'>First Name</label>
          <Field id='firstName' name='firstName' placeholder='First Name' />
          <label htmlFor='lastName'>Last Name</label>
          <Field id='lastName' name='lastName' placeholder='Last Name' />
          <label htmlFor='emailAddress'>Email Address</label>
          <Field
            id='emailAddress'
            name='emailAddress'
            placeholder='Email Address'
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <Field
            id='phoneNumber'
            name='phoneNumber'
            placeholder='Phone Number'
          />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
