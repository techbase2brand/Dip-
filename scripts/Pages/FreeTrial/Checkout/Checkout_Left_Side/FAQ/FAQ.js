import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';
import './FAQ.css';

const FAQ = (props) => {
    useEffect(() => {

        $(function ready() {
            $(window).on('load', function () {
                $('.faq_btn-1 button').addClass("active");
            })


            // $(".faq_accordion_1").hide();
            $(".faq_accordion_2").hide();
            $(".faq_accordion_3").hide();
            $('.faq_btn-1 button').on('click', function () {                
                $('.faq_btn-1 button').addClass("active");
                $('.faq_btn-2 button').removeClass("active");
                $('.faq_btn-3 button').removeClass("active");

                $('.faq_accordion_1').show();
                $('.faq_accordion_2').hide();
                $('.faq_accordion_3').hide();
                // $(this).show();
            })

            $('.faq_btn-2 button').on('click', function () {
                $('.faq_accordion_2').show();
                $('.faq_btn-2 button').addClass("active");
                $('.faq_btn-1 button').removeClass("active");
                $('.faq_btn-3 button').removeClass("active");

                $('.faq_accordion_1').hide();
                $('.faq_accordion_3').hide();
            })
            $('.faq_btn-3 button').on('click', function () {
                $('.faq_accordion_3').show();
                $('.faq_btn-3 button').addClass("active");
                $('.faq_btn-1 button').removeClass("active");
                $('.faq_btn-2 button').removeClass("active");

                $('.faq_accordion_2').hide();
                $('.faq_accordion_1').hide();
            })
        })



        $(function ready () {
            $('.faq_btn-1 button').on('click', function () {
                $('.faq_btn-1 button').addClass("active_button");
            })
        })
    }, [])



    return (
        <section className="faq_section w-100">
            <div className="faq_data">
                <div className="faq_heading">
                    <h4>{props.faq_heading}</h4>
                </div>

                {/* <div className="faq_butons">
                    <div className="faq_btn-1">
                        <button className="">{props.faq_button_1}</button>
                    </div>
                    <div className="faq_btn-2">
                        <button className="">{props.faq_button_2}</button>
                    </div>
                    <div className="faq_btn-3">
                        <button className="">{props.faq_button_3}</button>
                    </div>
                </div> */}

                <div className="faq_accordion faq_accordion_1">
                    <div className="accordion" id="accordionExample">
                        

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_20">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_20" aria-expanded="false" aria-controls="collapse_20">
                                         What are Dip Laundry Strips' ingredients?
                                </button>
                            </h2>
                            <div id="collapse_20" className="accordion-collapse collapse" aria-labelledby="heading_20" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    <div class="sp-tab-content">
                                        <p><span>Fragrance Free</span></p>
                                        <p>- Anionic Surfactant: A natural active cleaning ingredient</p>
                                        <p>- Non-ionic Surfactant: A biodegradable grease remover and in combination with Anionic Surfactant provide resistance to hard water.</p>
                                        <p>- Polyvinyl alcohol: A non-toxic, biodegradable polymer that acts as a fabric softener.</p>
                                        <p>- Sodium Citrate: A salt based ingredient, naturally occurring in fruit. It works to balance ph levels and soften hard water.</p>
                                        <p>- Coconut Oil Extracts: A natural soap cleanser, cleanses the skin of bacteria and dirt.</p>
                                        <p>- Sapindus Mukurossi Extracts: A fruit extract that works as a cleansing agent.</p>
                                        <p>- Bacteriostatic Agent: A biological agent that stops bacterial growth, without killing the organisms.</p>
                                        <p>- Enzyme: A naturally occurring proteinase that aids the break down of tough stains, particularly in cold water.</p>
                                        <p>The enzyme myth: It is a           common misconception that enzymes in biological laundry detergent cause skin irritation, this is in fact a myth. The primary reason for skin irritation is the alkaline ph level which is often up to 10 in regular Laundry Detergents (Bleach is 12+). Our strips have a neutral ph (7) which is the equivalent of water, they are hypoallergenic and great for sensitive skin.</p>
                                        <p>Why we use enzymes: Enzymes  are naturally occurring proteins that help breakdown tough stains, especially in cold water. They enable people to do more cold water laundry and to put delicate clothes (e.g. silk) in the same washes. Saving a lot of energy and reducing environmental impact.</p>
                                        <p></p>
                                        <p><span>Fresh Linen </span></p>
                                        <p>- The same as above with the addition of 'Fresh Linen Fragrance'.</p>
                                  </div>
                                  </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   How many strips should I use?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="sp-tab-content">
                                            <p>- Small load =  half strip (tear strip off and tear in half again)</p>
                                            <p>- Regular load = 1 strip</p>
                                            <p>- Large or very soiled load = 2 strips (1 whole sheet)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Can Dip be used with delicate fabrics?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">
                                            Yes, our laundry strips are designed to be used with all fabrics and are especially designed for great cleaning power in cold water washes. Nevertheless, if you are at all concerned, we recommend testing on select garments first.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                                         Can I use Dip in an H.E. (high efficiency) machine?
                                </button>
                            </h2>
                            <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">
                                        Yes. Our laundry strips do not contain a concentration of suds like most liquid or powder detergents so they work effectively in H.E. machines.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                                     Is Dip tested on animals?
                                </button>
                            </h2>
                            <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="heading_5" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">
                                        No! Dip products are never tested on animals by us or our manufacturers.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_6" aria-expanded="false" aria-controls="collapse_6">
                                     Is Dip vegan?
                                </button>
                            </h2>
                            <div id="collapse_6" className="accordion-collapse collapse" aria-labelledby="heading_6" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">
                                        Yes. All of our products are vegan and cruelty free.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_7">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_7" aria-expanded="false" aria-controls="collapse_7">
                                        Is Dip safe?
                                </button>
                            </h2>
                            <div id="collapse_7" className="accordion-collapse collapse" aria-labelledby="heading_7" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                           Yes, when used as intended our products are perfectly safe. Keep out of reach of children and if they are consumed or come in contact with eyes, seek medical attention.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_8">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_8" aria-expanded="false" aria-controls="collapse_8">
                                         How and where are Dip Laundry Strips made?
                                </button>
                            </h2>
                            <div id="collapse_8" className="accordion-collapse collapse" aria-labelledby="heading_8" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                          Dip Laundry Strips are made in our hydroelectric, renewable energy manufacturing plant in Shanghai. All of our products are made to the highest quality standards and are completely cruelty free. We are totally transparent about how and where all of our products are made and are proud of our fantastic manufacturing partners.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_9">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_9" aria-expanded="false" aria-controls="collapse_9">
                                        Is Dip safe for sensitive skin?
                                </button>
                            </h2>
                            <div id="collapse_9" className="accordion-collapse collapse" aria-labelledby="heading_9" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                           Yes, our laundry strips are hypoallergenic and great for sensitive skin. They have a neutral ph level (7), the equivalent of water. If you are at all concerned, we recommend our 'Fragrance Free' option and to test on select garments first.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_10">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_10" aria-expanded="false" aria-controls="collapse_10">
                                          Do I need to use fabric softener as well as Dip?
                                </button>
                            </h2>
                            <div id="collapse_10" className="accordion-collapse collapse" aria-labelledby="heading_10" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                          
                          No, our strips contain a natural fabric softener. 
      
      However, it is down to personal preference, some people like to use it for extra softness and scent.
  
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_11">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_11" aria-expanded="false" aria-controls="collapse_11">
                                Do I need to use water softener with Dip?
                                </button>
                            </h2>
                            <div id="collapse_11" className="accordion-collapse collapse" aria-labelledby="heading_11" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    No, our strips contain a natural water softener. Nevertheless, if you line in an area with particularly hard water you may still want to add some extra water softener.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_12">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_12" aria-expanded="false" aria-controls="collapse_12">
                                      Are your strips suitable for septic tanks?
                                </button>
                            </h2>
                            <div id="collapse_12" className="accordion-collapse collapse" aria-labelledby="heading_12" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                            Yes! Our strips are certified biodegradable and completely phosphorus free.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_13">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_13" aria-expanded="false" aria-controls="collapse_13">
                                        What do you mean by small, regular and large load?
                                </button>
                            </h2>
                            <div id="collapse_13" className="accordion-collapse collapse" aria-labelledby="heading_13" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                <div class="tab-content">
                        <p>- Small load =  half strip (tear strip off and tear in half again)</p>
                        <p>- Regular load = 1 strip</p>
                        <p>- Large or very soiled load = 2 strips (1 whole sheet)</p>
                        <p>One Dip laundry sheet is pre-measured to do a regular load of washing and there are 30 sheets in each pack. You can also tear the sheets into small pieces for smaller washes or use two sheets for larger washes, the same way you would with capsules.</p>
                      </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_14">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_14" aria-expanded="false" aria-controls="collapse_14">
                                Is Dip okay to use on my gym gear, it doesn’t reduce wicking ability?
                                </button>
                            </h2>
                            <div id="collapse_14" className="accordion-collapse collapse" aria-labelledby="heading_14" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    Our strips only have a very small quantity of natural softener so will not reduce the wicking ability of gym wear.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_15">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_15" aria-expanded="false" aria-controls="collapse_15">
                                Is Dip okay to use on my towels, it doesn’t reduce absorbency?
                                </button>
                            </h2>
                            <div id="collapse_15" className="accordion-collapse collapse" aria-labelledby="heading_15" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    Our strips only have a very small quantity of natural softener so will not reduce the absorbency of towels.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_16">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_16" aria-expanded="false" aria-controls="collapse_16">
                                Are the enzymes in the sheets environmentally friendly?
                                </button>
                            </h2>
                            <div id="collapse_16" className="accordion-collapse collapse" aria-labelledby="heading_16" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    Yes, the enzymes in our sheets are environmentally friendly, everything in our sheets is completely biodegradable in water and causes no harm to the environment.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_17">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_17" aria-expanded="false" aria-controls="collapse_17">
                                Can I still use colour catcher sheets with your detergent strips?
                                </button>
                            </h2>
                            <div id="collapse_17" className="accordion-collapse collapse" aria-labelledby="heading_17" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    Yes, you can use colour catchers with our detergent sheets.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_18">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_18" aria-expanded="false" aria-controls="collapse_18">
                                Wouldn’t it be best to manufacture here in the UK?
                                </button>
                            </h2>
                            <div id="collapse_18" className="accordion-collapse collapse" aria-labelledby="heading_18" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                            We are working on bringing production into the UK but it is a big task as a small start up. In the meantime, we are taking every step we can to be as sustainable as possible, from hydroelectric renewable manufacturing to delivering, using electric vehicles and bicycles wherever we can.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading_19">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_19" aria-expanded="false" aria-controls="collapse_19">
                                Is Dip grey water safe?
                                </button>
                            </h2>
                            <div id="collapse_19" className="accordion-collapse collapse" aria-labelledby="heading_19" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div class="tab-content">                                        
                                    Yes, our laundry sheets are grey water safe, they won’t cause any harm to plants.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="faq_accordion faq_accordion_2">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I compost your pods?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Which coffee machines are bo pods compatible with?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>



                <div className="faq_accordion faq_accordion_3">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I compost your pods?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    It’s really easy! You can just pop them in your home compost or food waste bin. In home composting conditions our pods will completely break down in under 180 days, that’s faster than grass cuttings! The other great thing about our pods is that even if you don’t have access to compost, you can put them in the general waste bin and they will decompose far faster than aluminium/plastic pods.
                                    **The average UK home compost is 30℃**
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ;