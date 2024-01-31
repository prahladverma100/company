import React from 'react'
import mazda from '../assets/image/webp/mazda.webp'
import atlassian from '../assets/image/webp/atlassian.webp'
import smashing from '../assets/image/webp/smashing.webp'
import qantas from '../assets/image/webp/qantas.webp'
import buysellads from '../assets/image/webp/buysellads.webp'
import intro from '../assets/image/webp/intro.webp'
import cssmaina from '../assets/image/webp/cssmaina.webp'
import popsugar from '../assets/image/webp/popsugar.webp'
import talentbin from '../assets/image/webp/talentbin.webp'
import civicrm from '../assets/image/webp/civicrm.webp'
import Slider from 'react-slick';


const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var setting = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        rtl: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    // slidesToScroll: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg_color pt-lg-5 pt-1 pb-0 pb-lg-5'>
            <div className=' container pt-md-5 pt-0 mt-3 pt-lg-5 mb-0 mb-lg-4 pb-0 pb-lg-5'>
                <p className='greay latter_sapcing ff_dmsans opacity5 fw-bold text-center mb-0 mb-lg-3 fs_sm pt-0 pt-lg-5 mt-4' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" id='brand'>BRANDS</p>
                <div className=' d-flex justify-content-center'>
                    <h6 className=' ff_dmsans fw-medium mx-width pt-2 mb-0 pb-0 pb-lg-3 mb-lg-4 text-center line-height1 text_black fs_xl' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">We work with thousands of the world’s leading brands</h6>
                </div>
                <Slider {...settings}>
                    <div>
                        <img src={mazda} alt="" />
                    </div>
                    <div>
                        <img src={atlassian} alt="" />
                    </div>
                    <div>
                        <img src={smashing} alt="" />
                    </div>
                    <div>
                        <img src={qantas} alt="" />
                    </div>
                    <div>
                        <img src={buysellads} alt="" />
                    </div>   <div>
                        <img src={buysellads} alt="" />
                    </div>

                </Slider>
                <Slider {...setting}>
                    <div>
                        <img src={intro} alt="" />
                    </div>
                    <div>
                        <img src={cssmaina} alt="" />
                    </div>
                    <div>
                        <img src={popsugar} alt="" />
                    </div>
                    <div>
                        <img src={cssmaina} alt="" />
                    </div>
                    <div>
                        <img src={talentbin} alt="" />
                    </div>
                    <div>
                        <img src={civicrm} alt="" />
                    </div>
                </Slider>
                <div className=' d-flex justify-content-center  pb-5'>
                    <p className=' ff_dmsans fw-normal fs_lg text-black1 pt-0 mt-lg-3 mt-0 pt-lg-4 lin-height text-center text-width' data-aos="fade-up"
                        data-aos-duration="1000">You're going to be in good company. We work with world's leading brands.</p>
                </div>
            </div>
        </div>
    )
}

export default Brands