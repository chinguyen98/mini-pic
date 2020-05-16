import React from 'react';
import Banner from '../../../components/Banner';
import images from '../../../constants/images';
import PhotoForm from '../components/PhotoForm';
import { Container } from 'reactstrap';

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