import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer_section">
            <div className="container_div">
                <div className="footer_data">
                    <div className="footer_left_text">
                        <p>
                            <span>Copyright © 2022, </span>
                            dip. all rights reserved.
                        </p>
                    </div>

                    <div className="right_text">
                        <a href="/#">Terms of Service</a>
                        <a href="/#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer