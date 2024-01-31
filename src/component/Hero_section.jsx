import React, { useState } from 'react'
import logo from '../assets/image/webp/logo.webp'
import hero_png from '../assets/image/webp/hero_png.webp'
import messages from '../assets/image/webp/messages.webp'
import totel_time from '../assets/image/webp/totel_time.webp'
import card from '../assets/image/webp/card.webp'
import { Container } from 'react-bootstrap'
import { Close, Navicons } from './Icon'
const Hero_section = () => {
    const [show, setShow] = useState(false);

    if (show === true) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
    const moment = () => {
        setShow(!true);
    };

    return (
        <div className='  min-height hero_img bg_color'>
            <div className="nav_container">
                <nav className=" pt3">
                    <div className="d-flex align-items-center  justify-content-between">
                        <div>
                            <img className="cursor_pointer logo_width" src={logo} alt="#" />
                        </div>
                        <div className='d-flex justify-content-center align-items-center '>
                            <ul className={show ? "open" : ""}>
                                <li><a href="#home" onClick={moment} className="fw-medium mb-0 ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Home</a></li>
                                <li><a href="#features" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Your benefits</a>  </li>
                                <li><a href="#process" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height">Our process</a></li>
                                <li><a href="#brand" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Our works</a></li>
                                <li> <a href="#start" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Testimonials</a> </li>
                                <li><a href="#footer" onClick={moment} className=" fw-medium ff_dmsans fs_lg text-white navline position-relative cursor_pointer lin_height"> Start a project</a></li>
                                <div className="d-lg-none d-block">
                                    <button className='  border-0 ff_dmsans fs_14  btn_getstarted mt-0  text-uppercase fw-bold'>Get started</button>
                                </div>
                            </ul>
                        </div>
                        <div className="d-xl-block d-none">
                            <button className=' border-0 ff_dmsans fs_14  btn_getstarted mt-0  text-uppercase fw-bold'>Get started</button>
                        </div>
                        <div className="d-flex align-items-center justify-content-between z_index d-block d-xl-none">
                            <button className="open  navicon  navi " onClick={() => { setShow(!show); }}>
                                {show ? <Close /> : <Navicons />}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className=' container translate pt-5 mt-5'>
                <div className='margin' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800">
                    <h1 className='text-center text-white line_height  ff_dmsans fw-medium fs_2xl'>A Digital Product Design Agency</h1>
                    <p className=' text-center opacity fs_2lg fw-normal ff_dmsans text-white line-height'>We are Creative and Professional Digital Agency</p>
                    <div className=' d-flex justify-content-center '>
                        <button className=' border-0 ff_dmsans fs_14  btn_getstarted mt-0 mt-lg-4  text-uppercase fw-bold'>Get started</button>
                    </div>
                </div>
                <div className='  d-flex justify-content-center z-3 ' data-aos="fade-up"
                    data-aos-duration="1200">
                    <div className='position-relative'>
                        <img className=' w-100 max_width img_padding1 z-3' src={hero_png} alt="" />
                        <img className=' position-absolute meassage_width img_right z-1' src={messages} alt="" />
                        <img className=' position-absolute totel_time w-100  z-3' src={totel_time} alt="" />
                        <img className=' position-absolute card_img  z-3' src={card} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero_section