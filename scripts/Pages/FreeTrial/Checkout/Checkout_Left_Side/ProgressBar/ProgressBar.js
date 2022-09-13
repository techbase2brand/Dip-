import React, {useEffect} from 'react';
import './ProgressBar.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const PeogressBar = (props) => {
    useEffect(() => {
        $(function ready() {
            $('.slider_data_1').on('click', function () {
                $('.slider_data_1').removeClass('mystyle');
                $(this).addClass('mystyle');
                props.update("frequency",$(this).attr("data-name"))
            })

            $(window).on('load', function () {
                $(".slider_data_1.onload").addClass('mystyle');
            });


            // Icons fill
            $('.coffee_icon').on('click', function () {
            })
            $(window).on('load', function () {
                $(".type_icon svg circle").addClass('progress_fill');
                $('.type_icon').addClass('type_icon_1');
            });

            $('.choose_type_data').on('click', function () {
                $('.type_icon svg circle').addClass('progress_fill');
                $('.type_icon').addClass('type_icon_1');
            })

            $('.coffee_data').on('click', function () {
                $('.bundle_icon svg circle').addClass('progress_fill');
                $('.bundle_icon').addClass('bundle_icon_1');
            })

            $('.delivery_data').on('click', function () {
                $('.delivery_icon svg circle').addClass('progress_fill');
                $('.delivery_icon').addClass('delivery_icon_1');
                $('.summery_icon svg circle').addClass('progress_fill');
                $('.summery_icon').addClass('summery_icon_1');
            })

            $('.summery_data').on('click', function () {
                // $('.summery_icon svg circle').addClass('progress_fill');
                // $('.summery_icon').addClass('summery_icon_1');
            })
        })
    }, [])




    return (
        <section className='progressBar_section'>
            <div className="progress_data">
                <a href='#Choose_type_section' className="type_icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#B2BCCA" />
                        <path d="M32 14H20C19.4696 14 18.9609 14.2107 18.5858 14.5858C18.2107 14.9609 18 15.4696 18 16V28C18 28.5304 18.2107 29.0391 18.5858 29.4142C18.9609 29.7893 19.4696 30 20 30H32C32.5304 30 33.0391 29.7893 33.4142 29.4142C33.7893 29.0391 34 28.5304 34 28V16C34 15.4696 33.7893 14.9609 33.4142 14.5858C33.0391 14.2107 32.5304 14 32 14ZM25.067 26.481L21.793 23.207L23.207 21.793L24.933 23.519L29.232 18.36L30.769 19.641L25.067 26.481Z" fill="white" />
                        <path d="M16 34H27V32H16V20H14V32C14 33.103 14.897 34 16 34Z" fill="white" />
                    </svg>
                    <h3>Type</h3>
                </a>

                <a href='#coffee_section' className="bundle_icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#B2BCCA" />
                        <path d="M33.6208 17.5667L24.9541 13.4267C24.8637 13.383 24.7646 13.3603 24.6641 13.3603C24.5637 13.3603 24.4646 13.383 24.3741 13.4267L14.3741 18.2533C14.2607 18.3074 14.1648 18.3924 14.0976 18.4985C14.0304 18.6047 13.9945 18.7277 13.9941 18.8533V29.8867C13.9937 30.0168 14.0313 30.1442 14.1024 30.2532C14.1735 30.3622 14.2749 30.448 14.3941 30.5L23.0608 34.6267C23.1512 34.6704 23.2504 34.6931 23.3508 34.6931C23.4512 34.6931 23.5504 34.6704 23.6408 34.6267L33.6408 29.8C33.7543 29.746 33.8501 29.661 33.9174 29.5548C33.9846 29.4487 34.0205 29.3257 34.0208 29.2V18.1667C34.0187 18.0388 33.9799 17.9143 33.9089 17.8079C33.838 17.7015 33.738 17.6178 33.6208 17.5667ZM24.6675 14.7667L31.9542 18.2467L28.5875 19.8733L21.4741 16.3067L24.6675 14.7667ZM23.3341 22.4267L16.0008 18.94L19.9341 17.04L27.0675 20.6067L23.3341 22.4267ZM24.0008 32.96V23.5733L32.6675 19.38V28.78L24.0008 32.96Z" fill="white" />
                    </svg>
                    <h3>Bundle</h3>
                </a>
                <a href='#delivery_section' className="delivery_icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#B2BCCA" />
                        <path d="M18 32C17.1667 32 16.4583 31.7083 15.875 31.125C15.2917 30.5417 15 29.8333 15 29H13V18C13 17.45 13.196 16.9793 13.588 16.588C13.9793 16.196 14.45 16 15 16H29V20H32L35 24V29H33C33 29.8333 32.7083 30.5417 32.125 31.125C31.5417 31.7083 30.8333 32 30 32C29.1667 32 28.4583 31.7083 27.875 31.125C27.2917 30.5417 27 29.8333 27 29H21C21 29.8333 20.7083 30.5417 20.125 31.125C19.5417 31.7083 18.8333 32 18 32ZM18 30C18.2833 30 18.521 29.904 18.713 29.712C18.9043 29.5207 19 29.2833 19 29C19 28.7167 18.9043 28.4793 18.713 28.288C18.521 28.096 18.2833 28 18 28C17.7167 28 17.479 28.096 17.287 28.288C17.0957 28.4793 17 28.7167 17 29C17 29.2833 17.0957 29.5207 17.287 29.712C17.479 29.904 17.7167 30 18 30ZM30 30C30.2833 30 30.5207 29.904 30.712 29.712C30.904 29.5207 31 29.2833 31 29C31 28.7167 30.904 28.4793 30.712 28.288C30.5207 28.096 30.2833 28 30 28C29.7167 28 29.4793 28.096 29.288 28.288C29.096 28.4793 29 28.7167 29 29C29 29.2833 29.096 29.5207 29.288 29.712C29.4793 29.904 29.7167 30 30 30ZM29 25H33.25L31 22H29V25Z" fill="white" />
                    </svg>
                    <h3>Delivery</h3>
                </a>
                <a href='#summary_section' className="summery_icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#B2BCCA" />
                        <path d="M15 17.5714C15 16.8894 15.2709 16.2354 15.7532 15.7532C16.2354 15.2709 16.8894 15 17.5714 15H26.5714C27.2534 15 27.9075 15.2709 28.3897 15.7532C28.8719 16.2354 29.1429 16.8894 29.1429 17.5714V26.5714H33V29.1429C33 30.1658 32.5936 31.1469 31.8703 31.8703C31.1469 32.5936 30.1658 33 29.1429 33H18.8571C17.8342 33 16.8531 32.5936 16.1297 31.8703C15.4064 31.1469 15 30.1658 15 29.1429V17.5714ZM29.1429 31.7143C29.8248 31.7143 30.4789 31.4434 30.9611 30.9611C31.4434 30.4789 31.7143 29.8248 31.7143 29.1429V27.8571H29.1429V31.7143ZM19.5 18.8571C19.3295 18.8571 19.166 18.9249 19.0454 19.0454C18.9249 19.166 18.8571 19.3295 18.8571 19.5C18.8571 19.6705 18.9249 19.834 19.0454 19.9546C19.166 20.0751 19.3295 20.1429 19.5 20.1429H24.6429C24.8134 20.1429 24.9769 20.0751 25.0974 19.9546C25.218 19.834 25.2857 19.6705 25.2857 19.5C25.2857 19.3295 25.218 19.166 25.0974 19.0454C24.9769 18.9249 24.8134 18.8571 24.6429 18.8571H19.5ZM19.5 22.7143C19.3295 22.7143 19.166 22.782 19.0454 22.9026C18.9249 23.0231 18.8571 23.1866 18.8571 23.3571C18.8571 23.5276 18.9249 23.6912 19.0454 23.8117C19.166 23.9323 19.3295 24 19.5 24H24.6429C24.8134 24 24.9769 23.9323 25.0974 23.8117C25.218 23.6912 25.2857 23.5276 25.2857 23.3571C25.2857 23.1866 25.218 23.0231 25.0974 22.9026C24.9769 22.782 24.8134 22.7143 24.6429 22.7143H19.5ZM19.5 26.5714C19.3295 26.5714 19.166 26.6392 19.0454 26.7597C18.9249 26.8803 18.8571 27.0438 18.8571 27.2143C18.8571 27.3848 18.9249 27.5483 19.0454 27.6689C19.166 27.7894 19.3295 27.8571 19.5 27.8571H22.0714C22.2419 27.8571 22.4054 27.7894 22.526 27.6689C22.6466 27.5483 22.7143 27.3848 22.7143 27.2143C22.7143 27.0438 22.6466 26.8803 22.526 26.7597C22.4054 26.6392 22.2419 26.5714 22.0714 26.5714H19.5Z" fill="white" />
                    </svg>
                    <h3>Summary</h3>
                </a>
            </div>
        </section>
    )
}

export default PeogressBar