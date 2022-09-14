import React from 'react';
import './Delivery.css';
import Slider1 from 'react-slick';


// Images
import month_1 from '../../../../Images/Dip-month_1.svg'
import month_2 from '../../../../Images/Dip-month_2.svg'
import month_3 from '../../../../Images/Dip-month_3.svg'

// Import css files
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";

const Delivery = () => {

    
    const slider1 = {
        dots: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        responsive: [

            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    }



    return (
        <section id='delivery_section' className='delivery_section'>
            <div className="delivery_data progressBar_fill">
                <div className="deliver_heading">
                    <h4>Delivery Frequency</h4>
                </div>

                <div className="slider_data">
                    <Slider1 className="" {...slider1}>
                        <div className="slider_data_2">
                            <div className="slider_data_1 onload" data-name={"Every Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every Month</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 2 Month"}>
                                <div className="slider_image">
                                    <img src={month_2} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 2 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 3 Month"}>
                                <div className="slider_image">
                                    <img src={month_3} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 3 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 4 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 4 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 5 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 5 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 6 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 6 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 7 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 7 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 8 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 8 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 9 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 9 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 10 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 10 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 11 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 11 Months</h5>
                                </div>
                            </div>
                        </div>

                        <div className="slider_data_2">
                            <div className="slider_data_1" data-name={"Every 12 Month"}>
                                <div className="slider_image">
                                    <img src={month_1} alt="" />
                                </div>
                                <div className="slider_text">
                                    <h5>Every 12 Months</h5>
                                </div>
                            </div>
                        </div>


                    </Slider1>
                </div>
            </div>
        </section>
    )
}

export default Delivery;