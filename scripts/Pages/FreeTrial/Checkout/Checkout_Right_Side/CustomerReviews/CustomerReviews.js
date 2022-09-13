import React from 'react';
import './CustomerReviews.css';

// Images
import profile_img_1 from '../../../../Images/profile_img_1.svg';
import profile_img_2 from '../../../../Images/profile_img_2.svg';
import review_stars from '../../../../Images/review_stars.svg';
import ReviewHeading from '../ReviewHeading/ReviewHeading';

const CustomerReviews = () => {
    return (
        <section className="customer_reviews_section">
            <div className="customer_review_data">
                <ReviewHeading heading_text='TRUSTED CUSTOMER REVIEWS' />

                <div className="review_profile">
                    <div className="profile_1">
                        <div className="profile_image">
                            <img src={profile_img_1} alt="" />
                        </div>

                        <div className="profile_data">
                            <div className="profile_data_1">
                                <div className="stars d-flex">
                                    <img src={review_stars} alt="" />
                                    <p>Liz H.</p>
                                </div>
                                <div className='profile_data_2'>
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.73571 8.07473L2.83889 6.13369L3.67349 5.27963L4.73571 6.36661L6.78428 4.27029L7.61888 5.12435L4.73571 8.07473ZM10.3503 1.94104C8.22586 1.94104 6.55666 1.31991 5.19095 0C3.74937 1.31991 2.15604 1.94104 0.0316005 1.94104C0.0316005 5.43491 -0.727127 10.404 5.19095 12.4227C11.0332 10.404 10.3503 5.43491 10.3503 1.94104Z" fill="#3DBF22" />
                                    </svg>
                                    Verified Buyer
                                </div>
                            </div>
                            <p className='profile_large_text'>“These strips are so easy to use! Just love them. If you have a smaller or larger wash you can adjust the strips accordingly. Cleans the washing well - smell good.”</p>
                        </div>
                    </div>


                    <div className="profile_1">
                        <div className="profile_image">
                            <img src={profile_img_2} alt="" />
                        </div>

                        <div className="profile_data">
                            <div className="profile_data_1">
                                <div className="stars d-flex">
                                    <img src={review_stars} alt="" />
                                    <p>Kate R</p>
                                </div>
                                <div className='profile_data_2'>
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.73571 8.07473L2.83889 6.13369L3.67349 5.27963L4.73571 6.36661L6.78428 4.27029L7.61888 5.12435L4.73571 8.07473ZM10.3503 1.94104C8.22586 1.94104 6.55666 1.31991 5.19095 0C3.74937 1.31991 2.15604 1.94104 0.0316005 1.94104C0.0316005 5.43491 -0.727127 10.404 5.19095 12.4227C11.0332 10.404 10.3503 5.43491 10.3503 1.94104Z" fill="#3DBF22" />
                                    </svg>
                                    Verified Buyer
                                </div>
                            </div>
                            <p className='profile_large_text'>“I'm always dubious about gimmicky-type household items but these washing sheets really are as good as they say.  I have to be careful with my young daughter's skin as she suffers if I don't use Fairy but I don't always get good stain removal.  But to my amazement the cleaning power of these sheets is incredible and for those really 'tough' stains i just hang out in the sun and they disappear, like i would with a biological (full of chemicals) powder!! Absolutely marvellous and they are brilliant...”</p>
                        </div>
                    </div>

                    <div className="profile_1 p-0">
                        <div className="profile_image">
                            <img src={profile_img_2} alt="" />
                        </div>

                        <div className="profile_data">
                            <div className="profile_data_1">
                                <div className="stars d-flex">
                                    <img src={review_stars} alt="" />
                                    <p>Joanna H.</p>
                                </div>
                                <div className='profile_data_2'>
                                    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.73571 8.07473L2.83889 6.13369L3.67349 5.27963L4.73571 6.36661L6.78428 4.27029L7.61888 5.12435L4.73571 8.07473ZM10.3503 1.94104C8.22586 1.94104 6.55666 1.31991 5.19095 0C3.74937 1.31991 2.15604 1.94104 0.0316005 1.94104C0.0316005 5.43491 -0.727127 10.404 5.19095 12.4227C11.0332 10.404 10.3503 5.43491 10.3503 1.94104Z" fill="#3DBF22" />
                                    </svg>
                                    Verified Buyer
                                </div>
                            </div>
                            <p className='profile_large_text'>“Dip sheets are by far the best laundry detergent I've used. I have sensitive skin and I can even use the fragrance sheets. They reduce static on your washing and leave everything clean and fresh. You don’t have to wash your washing machine draw as they don't leave behind any residential soap like liquids or powers.”</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CustomerReviews;