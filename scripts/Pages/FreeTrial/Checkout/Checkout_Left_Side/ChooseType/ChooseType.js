import React, { useEffect,useState } from 'react';
import './ChooseType.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const ChooseType = (props) => {

    useEffect(() => {
        $(function ready() {

            $('.desc_image_2').hide();
            $(window).on('load', function () {
                $('.product_image_1').addClass('active_product');
            })
            $('.product_image_1').off('click').on('click', function () {
                $('.product_image_1').addClass('active_product');
                $('.product_large_image_1').show();
                $('.product_large_image_2').hide();
                $('.product_image_2').removeClass('active_product');
                $('.desc_image_1').show();
                props.update("option","Fresh Linen");
                props.update("image","https://cdn.shopify.com/s/files/1/0631/6123/7716/products/1_180x.jpg?v=1652788650");


                fetch("https://checkout.wearedip.co.uk/api/get/inventory/7646761877716/42872568709332", {
                    method: 'GET',
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);

                        var ab = data.message.inventory_levels[1].available;

                        if( ab > 0 ){

                            $('.in-stock-ss').show();
                            $('.time_data h3').text("FREE TRIAL IS STILL AVAILABLE");
                            document.getElementById("stock-price-ss").innerHTML = ab;
                            $('.free_trial').text('Get my free trial');
                        }

                        else{

                            $('.time_data h3').text("OUT OF STOCK");
                            // $('.out-of-stock-ss ').show();
                            $('.in-stock-ss').hide();
                            $('.free_trial').text('Out of Stock');
                        }

                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            })

            $('.product_image_2').off('click').on('click', function () {
                $('.product_image_2').addClass('active_product');
                $('.product_large_image_1').hide();
                $('.product_large_image_2').show();
                $('.product_image_1').removeClass('active_product');
                // $('.desc_image_2').show();
                $('.desc_image_1').show();
                props.update("option","Fragrance Free");
                props.update("image","https://cdn.shopify.com/s/files/1/0631/6123/7716/products/2_180x.jpg?v=1652788652");

                fetch("https://checkout.wearedip.co.uk/api/get/inventory/7646761877716/42872568873172", {
                    method: 'GET',
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);

                        var ab = data.message.inventory_levels[1].available;

                        if( ab > 0 ){

                            $('.in-stock-ss').show();
                            $('.time_data h3').text("FREE TRIAL IS STILL AVAILABLE");
                            document.getElementById("stock-price-ss").innerHTML = ab;
                            $('.free_trial').text('Get my free trial');
                        }

                        else{

                            $('.time_data h3').text("OUT OF STOCK");
                            // $('.out-of-stock-ss ').show();
                            $('.in-stock-ss').hide();
                            $('.free_trial').text('Out of Stock');
                        }

                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

            })
        })
    }, [props])

    return (
        <section id='Choose_type_section' className="Choose_type_section">
            <div className="choose_type_data">
                <div className="choose_heading">
                    <h4>{props.choose_heading}</h4>
                </div>
                <div className="images_data">
                {props.type.length > 0 ? props.type.map((data, index) => (
                    <div key={index} className={"product_image_"+`${index+1}`}>
                        <img src={index == 0 ? props.product_1 : props.product_2} alt="" />
                        <p>{data}</p>
                    </div>
                )) : ""}
                </div>
            </div>
        </section>
    )
}

export default ChooseType
