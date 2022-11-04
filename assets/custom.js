jQuery_T4NT(document).ready(function($) {
  

     /**
     * Variant selection changed
     */
	  $( document ).on( "variant:change", function( evt, variant ) {
	    //console.log( variant );
	  });

});


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

$('.rc-option__subsave').on( "click", function() {
    $('select#selling_plan_stripe_id').show();
    $('p#price_ppr').text('£16.80');      
});


$('.rc-option__onetime').on( "click", function() {
    $('select#selling_plan_stripe_id').hide();
    $('p#price_ppr').text('£21.00');
});


$(".email-ss input[type='email']").keyup(function(){
    $(this).css("border-color", "#000");
    $(this).css("color", "#000");
  });



$(function ready() {
    $(window).on('load', function () {
        $('.product_image_1').addClass('active_product');
        $('.product_image_1').off('click').on('click', function () {
            $('.product_image_1').addClass('active_product');
            $('.product_image_2').removeClass('active_product');
            $('.coffee_data_fresh_linen').show();
            $('.coffee_data_fragnance_free').hide();
        })
        

        $('.product_image_2').off('click').on('click', function () {
            $('.product_image_2').addClass('active_product');
            $('.product_image_1').removeClass('active_product');
            $('.coffee_data_fresh_linen').hide();
            $('.coffee_data_fragnance_free').show();
        })

        $('.coffee_desc').off('click').on('click', function () {
            $('.coffee_desc').removeClass('mystyle_1');
            $(this).addClass('mystyle_1');
        });
    })
})




$('.buy-now-ss').on( "click", function() {

    if ($('.checkbox-ss input').is(':checked')) {
  
  
    if(!$('.email-ss input').val()){
        $(".email-ss input").attr("placeholder", "Please fill your email");;
        $(".email-ss input").css("border-color", "red");
        $(".email-ss input").css("color", "red");
    } else{
      $(".email-ss input").css("border-color", "#000");
      $(".email-ss input").css("color", "#000");
  
      $('.add-to-cart-ss').text('Loading ...')
    
      let var1quantity = document.querySelector('.quantity input.input-text[type=number]').value;
      let id = $('.mystyle_1').attr('data-id');
    
      let frequency = $('#selling_plan_stripe_id').find(':selected').data('value');
      let unit_type = document.querySelector('select#selling_plan_stripe_id').value;
    
      if($('#product_7549757259988_group_1038220_subsave').is(':checked')) { 
           frequency = $('#selling_plan_stripe_id').find(':selected').data('value');
           unit_type = document.querySelector('select#selling_plan_stripe_id').value;
      }
      else{
           frequency = "";
           unit_type = "false";
      }
    
      let email = document.querySelector('.email-ss input').value;
    
      let properties = {
        "subscription": unit_type,
        "delivery_frequency": frequency,
        "email":email
      }
    
      let formData = {
        'items':[{
         'id': id,
         'quantity': var1quantity,
         'properties' : properties         
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
        //  console.log(response.json());
       })
       .then(data=> {
        console.log(data)
        window.location ='/cart';
       })
       .catch((error) => {
         console.error('Error:', error);
       });
    
        // setTimeout(()=>{
    
        //   fetch('/cart.js', {
        //     method: 'GET',
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //      window.location ='https://checkout.drinkbo.coffee/checkout/bo-coffee-uk.myshopify.com/'+data.token;
    
        //     })
        //     .catch((error) => {
        //     console.error('Error:', error);
        //     });
    
        //  },2000)
    
    
    }
    }
    
    else{
  
  
      $('.add-to-cart-ss').text('Loading ...')
      
      let var1quantity = document.querySelector('.quantity input.input-text[type=number]').value;
      let id = $('.mystyle_1').attr('data-id');
    
      let frequency = $('#selling_plan_stripe_id').find(':selected').data('value');
      let unit_type = document.querySelector('select#selling_plan_stripe_id').value;
    
      if($('#product_7549757259988_group_1038220_subsave').is(':checked')) { 
           frequency = $('#selling_plan_stripe_id').find(':selected').data('value');
           unit_type = document.querySelector('select#selling_plan_stripe_id').value;
      }
      else{
           frequency = "";
           unit_type = "false";
      }
    
      let email = document.querySelector('.email-ss input').value;
    
      let properties = {
        "subscription": unit_type,
        "delivery_frequency": frequency,
        "email":email
      }
    
      let formData = {
        'items':[{
         'id': id,
         'quantity': var1quantity,
         'properties' : properties         
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
       //  console.log(response.json());
      })
      .then(data=> {
       console.log(data)
       window.location ='/cart';
      })
      .catch((error) => {
        console.error('Error:', error);
      });
   
    
        // setTimeout(()=>{
    
        //   fetch('/cart.js', {
        //     method: 'GET',
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //      window.location ='https://checkout.drinkbo.coffee/checkout/bo-coffee-uk.myshopify.com/'+data.token;
    
        //     })
        //     .catch((error) => {
        //     console.error('Error:', error);
        //     });
    
        //  },2000)
  
    }
  
  });



myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "free-trial-btn ss-bottomMenu ss-show"
    } else {
        myID.className = "free-trial-btn ss-bottomMenu ss-hide"
    }
};

window.addEventListener("scroll", myScrollFunc);