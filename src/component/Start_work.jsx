import React from 'react'
import ux_research from '../assets/image/webp/ux_research.webp'
import img1 from '../assets/image/webp/img1.webp'

const Start_work = () => {
  return (
    <div className='bg_gradient pt-4 pt-lg-4 pb-4 pb-lg-5 position-relative'>

      <div className=' container pt-0 mt-0 mt-lg-5 pb-0 pb-lg-5 pt-lg-5 mb-0 mb-lg-5'>
        <div className='row align-items-center pt-2' id='start'>
          <div className=' col-12 col-lg-5' data-aos="fade-right">
            <p className='text_gray text-uppercase latter_sapcing ff_dmsans mb-0 mb-lg-3 fw-bold opacity5 fs_sm text-lg-start text-center'>start with us</p>
            <div className=' d-flex justify-content-center justify-content-lg-start'>
              <h6 className=' ff_dmsans fs_xl fw-medium text-white text-center text-lg-start mx1 line-height1 pt-2'>Start working faster today</h6>
            </div>
            <p className=' ff_dmsans fw-normal fs_2lg text-white line-height text-center text-lg-start mx1 pb-0 pt-0 pt-lg-3'>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
            <div className=' d-flex justify-content-center justify-content-lg-start'>
              <button className=' bg-white border-0 btn_getstarted text-uppercase fs_14  fw-bold'>Get started</button>
            </div>
          </div>
          <div className='col-12 col-lg-7 d-flex justify-content-center position-relative z-2 mt-4 mt-lg-0' data-aos="fade-left">
            <img className=' w-100 z-3 ' src={ux_research} alt="" />
            <img className=' position-absolute d-none d-lg-block img1' src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start_work