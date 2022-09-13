import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <section className='navbar_section'>
            <div className="container_div">
                <a href='/#' className="brand_logo">
                    <img src={props.brand_logo} alt="brand_logo" />
                </a>
            </div>
        </section>
    )
}

export default Navbar