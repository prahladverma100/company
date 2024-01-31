import React from 'react'
import research from '../assets/image/webp/research.webp'
import { Business_audit, Data_traking, Ruselt } from './Icon'
import scenario from '../assets/image/webp/scenario.webp'
import overlay from '../assets/image/webp/overal.webp'

const Process = () => {
  return (
    <div className='bg_img3 pb pt-0 pt-lg-5' id='process'>
      <div className='container pt-5'>
        <p className='text_green latter_sapcing text-uppercase mb-0 pb-1 pb-lg-3 ff_dmsans fw-bold opacity5 text-center fs_sm pt-0 pt-lg-5 mt-0 mt-lg-5' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">how it works</p>
        <h3 className=' text-white line-height1 fw-medium ff_dmsans fs_xl text-center pb-' data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000">Our Process</h3>
        <div className=' d-flex justify-content-center'>
          <p className=' ff_dmsans line-height fw-normal text-white fs_2lg text-center max_width1 pb-0 pb-lg-2' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">We know the best solution for all of your business ideas and we can help you solve all business problems</p>
        </div>
        <div className=' position-relative line'>
          <div className='bg-white border_radius z-3 position-relative' data-aos="fade-right">
            <div className=' row'>
              <div className='col-12 col-lg-6'>
                <div className='  w-100'>
                  <img className=' w-100 img_padding' src={research} alt="" />
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex align-items-center'>
                <div className='px-4'>
                  <Business_audit />
                  <div className='pt-0 pt-lg-3 mt-1'>
                    <p className=' ff_dmsans fs_22 text_black mb-0 mb-lg-3 fw-bold lin-height1'>Business Audit</p>
                    <p className='text_black1 ff_dmsans fw-normal  fs_lg lin-height mx_width'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white margin_top border_radius z-3 position-relative' data-aos="fade-left">
            <div className=' row'>
              <div className='col-12 col-lg-6'>
                <div className='  w-100'>
                  <img className=' w-100 img_padding' src={overlay} alt="" />
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex align-items-center'>
                <div className='px-4'>
                  <Data_traking />
                  <div className='pt-0 pt-lg-3 mt-1'>
                    <p className=' ff_dmsans fs_22 text_black mb-0  mb-lg-3 fw-bold lin-height1'>Data tracking</p>
                    <p className='text_black1 ff_dmsans fw-normal lin-height fs_lg mx_width'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white margin_top  border_radius z-3 position-relative' data-aos="fade-right">
            <div className=' row'>
              <div className='col-12 col-lg-6'>
                <div className='  w-100'>
                  <img className=' w-100 img_padding' src={scenario} alt="" />
                </div>
              </div>
              <div className='col-12 col-lg-6 d-flex align-items-center'>
                <div className='px-4'>
                  <Ruselt />
                  <div className=' pt-0 pt-lg-3 mt-1'>
                    <p className=' ff_dmsans fs_22 mb-0 mb-lg-3  text_black fw-bold lin-height1'> Results</p>
                    <p className='text_black1 ff_dmsans fw-normal lin-height fs_lg mx_width'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Process