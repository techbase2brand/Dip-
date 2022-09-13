import React, { useEffect } from 'react';
import './Alert.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui'

const Alert = (props) => {

    // useEffect(() => {
    //     $(function ready() {
    //         $('.crossIcon').on('click', function () {
    //             $('.alert_section').fadeOut();
    //         })
    //     })
    // }, []);




    return (
        <section className='alert_section'>
            <div className="container_div">
                <div className="alert_data">
                    <div className="text_item_1">
                        Free Trial Special Offer | Limited Availability
                    </div>
                    {/* <div className="text_item_2">
                        <img className='crossIcon' src={props.crossIcon} alt="crossIcon" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Alert