import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import { Formik, Form, useField } from 'formik';

const Input = ({ label, name }) => {
  const [field] = useField(name);

  return (
    <label>
      {label}

      <input {...field} />
    </label>
  );
};

test('formik example', () => {
  const { getByLabelText } = render(
    <Formik
      initialValues={{
        email: ''
      }}
      onSubmit={() => {}}
    >
      <Form>
        <Input name="email" label="Email address" />
      </Form>
    </Formik>
  );

  fireEvent.change(getByLabelText('Email address'), {
    target: { value: 'test@test.de' }
  });
  expect(getByLabelText('Email address')).toBeDefined();
})
