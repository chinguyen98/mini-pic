import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import images from 'constants/images';

MainPage.propTypes = {}

function MainPage() {
  return (
    <div>
      <Banner backgroundUrl={images.imageLeft_BG} title='WELCOME'></Banner>
      <Container className='text-center'>
        <Link className='btn btn-primary mt-2' to='/pics/add'>Add new awesome Picture</Link>
      </Container>
    </div>
  )
}

export default MainPage;