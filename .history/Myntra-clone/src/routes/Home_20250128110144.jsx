import React from 'react'
import Slideshow from '../components/Slideshow';


const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='img-1'> <img src="images/Hero-section-1.png"/></div>
    </div>
    <div className='show d-flex justify-content-evenly'>
    <Slideshow/>
    <Slideshow/>
    <Slideshow/>
    <Slideshow/>
    </div>

    </>
  )
}

export default Home;
