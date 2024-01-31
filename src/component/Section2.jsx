import React from 'react'
import { Business, Drive, Group, Grow, Tracking, Ux } from './Icon'
import shape from '../assets/image/webp/shape.webp'
import shape1 from '../assets/image/webp/shape1.webp'

const Section2 = () => {
    return (
        <div className='bg_color pt1' id='features'>
            <div className='pt1 pb position-relative'>
                <img className=' position-absolute d-none d-lg-block shape' src={shape} alt="" />
                <img className=' position-absolute d-none d-lg-block shape1' src={shape1} alt="" />

                <div className=' container'>
                    <p className=' padding_top greay text-uppercase ff_dmsans text-lg-start text-center opacity5 fw-bold opacity5 line-height1 fs_sm' data-aos="fade-right">features</p>
                    <div className=' justify-content-center d-flex justify-content-lg-start'>
                        <h4 className=' ff_dmsans fw-medium fs_xl text-lg-start text-center max-width line-height1' data-aos="fade-right">We are here to help you with</h4>
                    </div>
                    <div className=' row z-3 position-relative'>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2 '>
                                <span>  <Grow /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color pb15 mb-0 lin-height'>Grow your business</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height1'><span className='ff_dmsans fs_lg fw-bold text_color1 '>The magic wand</span> for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</p>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2'>
                                <span>  <Drive /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color pb15 mb-0 lin-height1'>Drive more sales</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height'> A potential customer, once lost, is hard to retain back.But<span className='ff_dmsans fs_lg fw-bold text_color1 '>keeping some critical</span>   factors in mind, we can, for sure, use these loyalty programs as customer retention tools.</p>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2'>
                                <span>  <Group /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color mb-0 mt-0 pb15 lin-height1'>Handle by Expert</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height'>We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively</p>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2'>
                                <span>  <Ux /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color mb-0 mt-0 pb15 lin-height1'>UX Research</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height '>UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.</p>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2'>
                                <span>  <Business /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color mb-0 lin-height1 mt-0 pb15'>Business Audit</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                            </div>
                        </div>
                        <div className=' col-12 col-md-6 col-lg-4 pt-4 d-flex justify-content-center justify-content-lg-start' data-aos="flip-down">
                            <div className='bg-white card2'>
                                <span>  <Tracking /></span>
                                <p className=' ff_dmsans fs_22 fw-bold text_color mb-0 mt-0 pb15 lin-height1'>Data tracking</p>
                                <p className='ff_dmsans fs_lg fw-normal text_color1 lin-height'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2