import React,{useState,useEffect, useCallback} from 'react';
import './Checkout.css'
import Bundles from './Checkout_Left_Side/Bundles/Bundles';
import Delivery from './Checkout_Left_Side/Delivery/Delivery';
import OrderConfirmation from './Checkout_Left_Side/OrderConfirmation/OrderConfirmation';
import ProgressBar from './Checkout_Left_Side/ProgressBar/ProgressBar.js';

import Subscription from './Checkout_Left_Side/Subscription/Subscription';
import FAQ from './Checkout_Left_Side/FAQ/FAQ';
import ProductReview from './Checkout_Right_Side/ProductReview/ProductReview';
import CustomerReviews from './Checkout_Right_Side/CustomerReviews/CustomerReviews';
import WhyChooseUs from './Checkout_Right_Side/Why_Choose_Us/WhyChooseUs';
import ChooseType from './Checkout_Left_Side/ChooseType/ChooseType';

// images
import product_image from '../../Images/Dip-product_image.svg'
import product_1 from '../../Images/Dip-product-1.svg';
import product_2 from '../../Images/Dip-product-2.svg';

const Checkout = () => {

    const [load,setLoad] = useState(false)
    const [product,setProduct] = useState([])

    const [checkout , setCheckout] = useState({
        title:"",
        price:0,
        option:"Fresh Linen",
        bundle:null,
        frequency:"Every Month",
    })

    const updateCheckout = useCallback(
        (key,data) => {
            setCheckout(prevState => ({
                ...prevState,
                [key]:data
            }))
        },
        [checkout],
    );

    const [type , setType] = useState([])

    const [bundles , setBundles] = useState([])

    useEffect(() => {
        if(!load){
            fetch('/products/laundry-detergent-strips.js', {
                method: 'GET'
            })
            .then(response => {
                return response.json();
            })
            .then(data=> {
                console.log(data)
                let option1 = data.options[0].values
                let option2 = data.options[1].values

                setCheckout(prevState => ({
                    ...prevState,
                    option:option1[0],
                    title:data.title,
                    price:data.variants[0].price
                }))

                for(let op1 of option1){
                    let newarr = []
                    for(let op2 of option2){
                        for(let v of data.variants){
                            if(v.option1 == op1 && v.option2 == op2){
                                newarr.push({
                                    name:v.name,
                                    id:v.id,
                                    title:v.title,
                                    price:v.price,
                                    compare:v.compare_at_price,
                                    img:v.featured_image.src,
                                    qty:1
                                })
                            }
                        }
                    }

                    setBundles(prevState => ({
                        ...prevState,
                        [op1]:newarr
                    }))
                }

                setType(option1)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }

        setLoad(true)
    } , [load,bundles,type,checkout])

    const [frequency , setFrequency] = useState(["Every Month","Every 2 Month","Every 3 Month","Every 4 Month"])

    return (
        <section className='checkout_section'>
            <div className="checkout_all_data">
                <div className="checkout_left_section">
                    <div className="checkout_left_section_1">
                        <ProgressBar checkout={checkout} update={updateCheckout} />
                        <ChooseType choose_heading='Choose Your Type' product_1={product_1} product_2={product_2} type={type} update={updateCheckout} />
                        <Bundles bundles={bundles} checkout={checkout} update={updateCheckout} />
                        <Delivery frequency={frequency} update={updateCheckout} />
                        <OrderConfirmation product_image={product_image} heading1='Home Compostable' heading2='Coffee Pods' product_price='£52.80' checkout={checkout} update={updateCheckout} />
                        <Subscription subsc_button_1='Edit Plan' subsc_button_2='Get My Free Trial' checkout={checkout} />
                    </div>

                </div>

                <div className="checkout_right_section">
                    <div className="checkout_right_section_1">
                        <ProductReview />
                        <CustomerReviews />
                        {/* <WhyChooseUs /> */}
                        <FAQ faq_heading='Frequently Asked Questions' faq_button_1='Home Compostable Pods' faq_button_2='Our Coffee' faq_button_3='Subscriptions' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
