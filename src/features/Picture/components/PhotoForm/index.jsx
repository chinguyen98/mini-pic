import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import images from 'constants/images';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm() {
  return (
    <Form>
      <FormGroup>
        <Label for='title'>Title</Label>
        <Input name='title' id='title' placeholder='Pic title...' />
      </FormGroup>
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
}

export default PhotoForm;