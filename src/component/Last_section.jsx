import React from 'react'
import { Facebook, Insta, Tiwtter } from './Icon'
import footer_logo from '../assets/image/webp/footer_logo.webp'

const Last_section = () => {
    return (
        <div className=' bg-black pt-1 pt-lg-5'>
            <div className=' container pt-2 mt-2'>
                <div className='d-flex justify-content-between flex-column flex-lg-row' id='footer'>
                    <div className='cursor_pointer'>
                        <img src={footer_logo} alt="" />
                    </div>
                    <ul className=' d-flex ps-0 mb-0 gap-lg-4 gap-sm-3 gap-2 pt-2 pt-lg-0 flex-wrap'>
                        <li><a href="" className='text_light fw-medium ff_dmsans fs_lg lin_height cursor_pointer'>Home</a></li>
                        <li><a href="" className='text_light fw-medium ff_dmsans fs_lg lin_height cursor_pointer'>Your benefits</a></li>
                        <li><a href="" className='text_light fw-medium ff_dmsans fs_lg lin_height cursor_pointer'>Our process</a></li>
                        <li><a href="" className='text_light fw-medium ff_dmsans fs_lg lin_height cursor_pointer'>Testimonials</a></li>
                        <li><a href="" className='text_light fw-medium ff_dmsans fs_lg lin_height cursor_pointer'>Start a project</a></li>

                    </ul>
                    <div className='d-flex gap1 pt-3 pt-lg-0'>
                        <span className='scale cursor_pointer'><a href=""><Facebook /></a></span>
                        <span className='scale cursor_pointer'><a href="">< Insta /></a></span>
                        <span className='scale cursor_pointer'><a href=""><Tiwtter /></a></span>
                    </div>
                </div>
                <div className='w-100 bg_gray margin_top1 height'></div>
                <div className=' d-flex justify-content-between flex-wrap pt-lg-4 pt-2 mt-1'>
                    <p className='text_light fw-normal fs_md ff_dmsans lin-height'>© 2021 Company</p>
                    <div className=' d-flex gap-4'>
                        <p className='text_light fw-normal fs_md ff_dmsans lin-height'>Privacy policy</p>
                        <p className='text_light fw-normal fs_md ff_dmsans lin-height'>Term of service</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Last_section