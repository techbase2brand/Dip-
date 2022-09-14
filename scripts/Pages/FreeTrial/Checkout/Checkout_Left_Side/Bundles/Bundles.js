import React, { useState, useEffect } from 'react';
import './Bundles.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// Images
import desc_image_1 from '../../../../Images/Dip-desc_image_1.svg';
import desc_image_2 from '../../../../Images/Dip-product-2.svg';

const Coffee = (props) => {

    // const [type , setType] = useState([])
    // const [bundle , setBundle] = useState([])

    const [quantity, setCount] = useState(0);
    const increment = () => {
        setCount(quantity + 1);
    }
    const decrement = () => {
        if (quantity >= 1) {
            setCount(quantity - 1);
        }
    }

    const [quantity_1, setCount_1] = useState(0);
    const increment_1 = () => {
        setCount_1(quantity_1 + 1);
    }
    const decrement_1 = () => {
        if (quantity_1 >= 1) {
            setCount_1(quantity_1 - 1);
        }
    }

    const [quantity_2, setCount_2] = useState(0);
    const increment_2 = () => {
        setCount_2(quantity_2 + 1);
    }
    const decrement_2 = () => {
        if (quantity_2 >= 1) {
            setCount_2(quantity_2 - 1);
        }
    }

    const [quantity_3, setCount_3] = useState(0);
    const increment_3 = () => {
        setCount_3(quantity_3 + 1);
    }
    const decrement_3 = () => {
        if (quantity_3 >= 1) {
            setCount_3(quantity_3 - 1);
        }
    }

    const [quantity_4, setCount_4] = useState(0);
    const increment_4 = () => {
        setCount_4(quantity_4 + 1);
    }
    const decrement_4 = () => {
        if (quantity_4 >= 1) {
            setCount_4(quantity_4 - 1);
        }
    }


    useEffect(() => {

        $(function ready() {
            $('.coffee_desc').off('click').on('click', function () {
                $('.coffee_desc').removeClass('mystyle_1');
                $(this).addClass('mystyle_1');
                props.update("bundle",$(this).attr("data-id"))
                props.update("price",$(this).attr("data-price"))
            })

            $(window).on('load', function () {
                // console.log("bundle on load")
                $(".coffee_desc.onload").addClass('mystyle_1');
                // props.update("bundle",$(".coffee_desc.onload").attr("data-id"))
                // props.update("price",$(".coffee_desc.onload").attr("data-price"))
            });

            // setType(props.checkout.option)
        })



        // if(Object.keys(props.bundles).length > 0){
        //     setBundle(props.bundles[type])
        // }

        console.log(props)
        // console.log(type)
        // console.log(bundle)
    }, [props])



    return (
        <section id='coffee_section' className='coffee_section'>
            <div className="coffee_data">
                <div className="coffee_heading">
                    <h4>Select Your Bundle</h4>
                    {/* <p>( 30 pods per pack )</p> */}
                </div>
                {Object.keys(props.bundles).length > 0 ? props.bundles[props.checkout.option].map((data, index) => (
                <div key={index} className={"coffee_desc "+ (index == 0 ? "onload":"")} data-id={data.id} data-price={data.price}>
                    <div className="desc_image">
                        <img className='desc_image_1' src={data.img} alt="" />
                        <img className='desc_image_2' src={data.img} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Only £16per wash - Save £{(data.compare/100) - (data.price/100)}</span>
                                <h4>{data.title}</h4>
                            </div>
                            <div className="product_price">
                                {/* <p>Best Seller</p> */}
                                {/* <h5><del>£{data.price/100}</del></h5> */}
                                <h6>£{data.compare/100}</h6>

                            </div>
                        </div>

                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity} />
                            <button onClick={increment} className="plus">+</button>
                        </div> */}
                    </div>
                </div>
            )) : ""}
            </div>
        </section>
    )
}

export default Coffee;
