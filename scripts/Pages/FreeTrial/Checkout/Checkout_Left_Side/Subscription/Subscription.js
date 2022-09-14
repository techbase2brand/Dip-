import React from 'react';
import './Subscription.css'

const Subscription = (props) => {

    function getFreeTrial()
    {
        // alert(window.Shopify.routes.root);
        console.log(document.querySelector(".mystyle").parentElement.parentElement.parentElement.dataset.index)
        let index = document.querySelector(".mystyle").parentElement.parentElement.parentElement.dataset.index
        let planId = ""

        if(index == 0) planId = 2615279828
        if(index == 1) planId = 2615312596
        if(index == 2) planId = 2615345364
        if(index == 3) planId = 2615378132
        if(index == 4) planId = 2615410900
        if(index == 5) planId = 2615443668
        if(index == 6) planId = 2615476436
        if(index == 7) planId = 2615509204
        if(index == 8) planId = 2615541972
        if(index == 9) planId = 2615574740
        if(index == 10) planId = 2615607508
        if(index == 11) planId = 2615640276

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
            window.location.href="/checkout"
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
