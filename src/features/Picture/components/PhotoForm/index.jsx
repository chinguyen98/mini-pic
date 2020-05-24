import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm() {
  const initValues = {
    title: '',
    category: null,
  }

  return (
    <Formik
      initialValues={initValues}
    >
      {formikProps => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name='title'
              component={InputField}

              label='Title'
              placeholder='Pic title...'
            />

            <FastField
              name='category'
              component={SelectField}

              label='Category'
              placeholder='Choose one.....'
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name='photo'
              component={RandomPhotoField}
              label='Photo'
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default PhotoForm;