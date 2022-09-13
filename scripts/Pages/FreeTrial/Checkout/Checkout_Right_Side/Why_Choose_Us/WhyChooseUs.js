import React from 'react';
import './WhyChooseUs.css';

// Images
import choose_us_1 from '../../../../Images/choose_us_1.svg'
import choose_us_2 from '../../../../Images/choose_us_2.svg'
import choose_us_3 from '../../../../Images/choose_us_3.svg'
import ReviewHeading from '../ReviewHeading/ReviewHeading';

const WhyChooseUs = () => {
  return (
    <section className="why_choose_us_Section">
      <div className="why_choose_us_data">
        <ReviewHeading heading_text='WHY CHOOSE US' />

        <div className="guarantee_data">
          <div className="guarantee_data_1">
            <div className="choose_image">
              <img src={choose_us_1} alt="" />
            </div>
            <div className="choose_text">
              <h5>30-Day Satisfaction Guarantee</h5>
              <p>If you're not satisfied with your product(s), we'll make it right! We promise.</p>
            </div>
          </div>

          <div className="guarantee_data_1">
            <div className="choose_image">
              <img src={choose_us_2} alt="" />
            </div>
            <div className="choose_text">
              <h5>30-Day Satisfaction Guarantee</h5>
              <p>If you're not satisfied with your product(s), we'll make it right! We promise.</p>
            </div>
          </div>

          <div className="guarantee_data_1">
            <div className="choose_image">
              <img src={choose_us_3} alt="" />
            </div>
            <div className="choose_text">
              <h5>30-Day Satisfaction Guarantee</h5>
              <p>If you're not satisfied with your product(s), we'll make it right! We promise.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;