import React,{ useEffect } from 'react';
import './Subscription.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const Subscription = (props) => {

  useEffect(() => {
    $(window).on('load', function () {

      document.querySelector(".spinner-ss").style.display = "none";

      $(".email-ss input[type='email']").keyup(function(){
        $(this).css("border-color", "#000");
        $(this).css("color", "#000");
      });

// setTimeout(()=>{
//   if (localStorage.getItem('customer') !== null){
//     $('.checkbox-ss input').trigger()
//     $('.email-ss input').val()   
//     alert('customer')
//     }
//     else{
//         alert('not')        
//       }

// },2000)


      if ($('.checkbox-ss input').is(':checked')) {
        $('.email-ss').show();
      }
      else{
        $('.email-ss').hide();
      }
      
      $( ".checkbox-ss input" ).on( "click", function() {
          
      if ($('.checkbox-ss input').is(':checked')) {
          $('.email-ss').show();
      }
      else{
          $('.email-ss').hide();
      }
          
      });

  });

  }, [])
  

    function getFreeTrial()
    {

      if ($('.checkbox-ss input').is(':checked')) {


        if(!$('.email-ss input').val()){
            $(".email-ss input").attr("placeholder", "Please fill your email");;
            document.querySelector(".email-ss input").style.borderColor = "red";
            document.querySelector(".email-ss input").style.color = "red";
        } else{

          document.querySelector(".free_trial-enabled").style.display = "none";
          document.querySelector(".spinner-ss").style.display = "flex";
            
        if(index == 4) planId = 5
        if(index == 5) planId = 6
        if(index == 6) planId = 7
        if(index == 7) planId = 8
        if(index == 8) planId = 9
        if(index == 9) planId = 10
        if(index == 10) planId = 11
        if(index == 11) planId = 12

        let properties = {
          'subscription_duration' : planId
        }

        let formData = {
            'items': [{
             'id': props.checkout.bundle,
             'quantity': 1
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
  }
  else{

    document.querySelector(".free_trial").style.display = "none";
    document.querySelector(".spinner-ss").style.display = "flex";

    if(index == 4) planId = 5
    if(index == 5) planId = 6
    if(index == 6) planId = 7
    if(index == 7) planId = 8
    if(index == 8) planId = 9
    if(index == 9) planId = 10
    if(index == 10) planId = 11
    if(index == 11) planId = 12

    let properties = {
      'subscription_duration' : planId
    }

    let formData = {
        'items': [{
         'id': props.checkout.bundle,
         'quantity': 1
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
  }

    return (
        <section className='subscription_section w-100'>
            <div className="subscription_data">

            <div class="form-group checkbox-ss">
                <input type="checkbox" id="css"/>
                <label for="css">Already a customer? Check the box for faster checkout.</label>
          </div>
          <div class="form-group email-ss">
                <input type="email" placeholder="Your email"/>
          </div>  

                <form action="" className='subscrip_btns'>
                    <a href='#Choose_type_section' className="edit_subs">{props.subsc_button_1}</a>
                    <a onClick={getFreeTrial} className="free_trial">{props.subsc_button_2}</a>
                    <a className='spinner-ss'><span id="loading"></span></a>
                </form>
                <div className="subscrip_para">
                    <p>You can easily <span>change or cancel</span> your subscription anytime.</p>
                </div>
            </div>
        </section>
    )
}

export default Subscription
