import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import { FormGroup, Label, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import images from 'constants/images';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

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


            <FormGroup>
              <Label for='randomPhotoBtn'>Photo</Label><br />
              <Button type='button' outline color='primary'>Random a photo</Button><br />
              <img src={images.image2_BG} alt="randomImg" width='200px' height='200px' />
            </FormGroup>
            <FormGroup>
              <Button type='submit' color='primary'>Add photo</Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  )
}

export default PhotoForm;