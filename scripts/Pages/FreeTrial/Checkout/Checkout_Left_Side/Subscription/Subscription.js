import React from 'react';
import './Subscription.css'

const Subscription = (props) => {
    
    function getFreeTrial()
    {
        // alert(window.Shopify.routes.root);
        console.log(document.querySelector(".mystyle").parentElement.parentElement.parentElement.dataset.index)
        let index = document.querySelector(".mystyle").parentElement.parentElement.parentElement.dataset.index
        let planId = ""

        if(index == 0) planId = 4683825394
        if(index == 1) planId = 4683858162
        if(index == 2) planId = 4683890930
        if(index == 3) planId = 4683923698 

        let formData = {
            'items': [{
             'id': props.checkout.bundle,
             'quantity': 1,
             'selling_plan': planId
             }]
           };
           fetch('/cart/add.js', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(formData)
           })
           .then(response => {
             return response.json();
           })
           .then(data=> {
            console.log(data)
            window.location.href="/cart"
           })
           .catch((error) => {
             console.error('Error:', error);
           });
    }

    return (
        <section className='subscription_section w-100'>
            <div className="subscription_data">
                <form action="" className='subscrip_btns'>
                    <a href='#Choose_type_section' className="edit_subs">{props.subsc_button_1}</a>
                    <a href='#/' onClick={getFreeTrial} className="free_trial">{props.subsc_button_2}</a>
                </form>
                <div className="subscrip_para">
                    <p>You can easily <span>change or cancel</span> your subscription anytime.</p>
                </div>
            </div>
        </section>
    )
}

export default Subscription