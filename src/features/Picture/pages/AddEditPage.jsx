import React from 'react';
import Banner from '../../../components/Banner';
import images from '../../../constants/images';

AddEditPage.propTypes = {}

function AddEditPage() {
  return (
    <div>
      <Banner backgroundUrl={images.image1_BG} title='Add Edit Pic'></Banner>
    </div>
  )
}

export default AddEditPage;