import React from 'react';
import './FreeTrialAvailable.css';
// import $ from 'jquery';
// import 'jquery-ui-dist/jquery-ui';

const FreeTrialAvailable = (props) => {
    // (function () {
    //     const second = 1000,
    //         minute = second * 60,
    //         hour = minute * 60,
    //         day = hour * 24;

    //     //I'm adding this section so I don't have to keep updating this pen every year :-)
    //     //remove this if you don't need it
    //     let today = new Date(),
    //         dd = String(today.getDate()).padStart(2, "0"),
    //         mm = String(today.getMonth() + 1).padStart(2, "0"),
    //         yyyy = today.getFullYear(),
    //         nextYear = yyyy + 1,
    //         dayMonth = "09/30/",
    //         birthday = dayMonth + yyyy;

    //     today = mm + "/" + dd + "/" + yyyy;
    //     if (today > birthday) {
    //         birthday = dayMonth + nextYear;
    //     }
    //     //end

    //     const countDown = new Date(birthday).getTime(),
    //         x = setInterval(function () {

    //             const now = new Date().getTime(),
    //                 distance = countDown - now;

    //             document.getElementById("days").innerText = Math.floor(distance / (day));
    //             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
    //             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
    //             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //             //do something later when date is reached
    //             if (distance < 0) {
    //                 document.getElementById("headline").innerText = "It's my birthday!";
    //                 document.getElementById("countdown").style.display = "none";
    //                 document.getElementById("content").style.display = "block";
    //                 clearInterval(x);
    //             }
    //             //seconds
    //         }, 0)
    // }());


    return (
        <section className='timer_section'>
            <div className="container_div">
                <div className="time_data">
                    <h3>{props.timerHeading}</h3>
                    <p className='d-flex align-items-center justify-content-center'>Only<h6 id='stock-price-ss'>{props.leftStock}</h6>left in stock, offer ends in</p>

                    {/* <div className="counter_timer">
                        <div className="time_Items">
                            <h1>{props.days}</h1>
                            <h5>Days</h5>
                        </div>
                        <div className="time_Items">
                            <h1>{props.hours}</h1>
                            <h5>Hours</h5>
                        </div>
                        <div className="time_Items">
                            <h1>{props.minutes}</h1>
                            <h5>Minutes</h5>
                        </div>
                        <div className="time_Items m-0">
                            <h1>{props.seconds}</h1>
                            <h5>Seconds</h5>
                        </div>
                    </div> */}

                    {/* <div className="counter_timer">
                        <div className="time_Items">
                            <h1 id="days"> </h1>
                            <h5>Days</h5>
                        </div>
                        <div className="time_Items">
                            <h1 id="hours"> </h1>
                            <h5>Hours</h5>
                        </div>
                        <div className="time_Items">
                            <h1 id="minutes"> </h1>
                            <h5>Minutes</h5>
                        </div>
                        <div className="time_Items m-0">
                            <h1 id="seconds"> </h1>
                            <h5>Seconds</h5>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div class="container">
                <h1 id="headline">Countdown to my birthday</h1>
                <div id="countdown">
                        <ul>
                            <li><span id="days"></span>days</li>
                            <li><span id="hours"></span>Hours</li>
                            <li><span id="minutes"></span>Minutes</li>
                            <li><span id="seconds"></span>Seconds</li>
                        </ul>
                    </div>
                <div id="content" class="emoji">
                    <span>🥳</span>
                    <span>🎉</span>
                    <span>🎂</span>
                </div>
            </div> */}

        </section>
    )
}

export default FreeTrialAvailable;
