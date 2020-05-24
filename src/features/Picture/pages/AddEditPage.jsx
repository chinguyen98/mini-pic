import React from 'react';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import images from 'constants/images';
import PhotoForm from '../components/PhotoForm';

AddEditPage.propTypes = {}

function AddEditPage() {
  return (
    <div>
      <Banner backgroundUrl={images.image1_BG} title='Add Edit Pic'></Banner>
      <Container>
        <PhotoForm />
      </Container>
    </div>
  )
}

export default AddEditPage;