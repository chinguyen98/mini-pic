import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Formik, Form, FastField } from 'formik';
import { FormGroup, Label, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import images from 'constants/images';
import InputField from 'custom-fields/InputField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm() {
  const initValues = {
    title: '',
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

            <FormGroup>
              <Label for='category'>Category</Label>
              <Select
                id='category'
                name='category'
                placeholder='Choose category'
                options={PHOTO_CATEGORY_OPTIONS}
              />
            </FormGroup>
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