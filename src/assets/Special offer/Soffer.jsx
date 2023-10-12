import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
export const Soffer = () => {
    return (
        <>
            <div className="s-offer">
                <Swiper
                    loop={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay, EffectCoverflow]}
                    spaceBetween={0}
                    effect='coverflow'
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <img src="/Images/s-offer1.jpg" alt="#" />
                        <div className="sec-1">
                            <h3>Portable, versatile, everyday convenience</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/s-offer2.jpg" alt="#" />
                        <div className="sec-1">
                            <h3>Circular finger adornment symbolizes commitment</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/s-offer3.jpg" alt="#" />
                        <div className="sec-1">
                            <h3>Footwear, style, comfort</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/Images/s-offer4.webp" alt="#" />
                        <div className="sec-1">
                            <h3>Lip color and beauty</h3>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="container my-5">
                    <div className="text-center">
                        <h2><span className='text-danger'>Special</span> Offer</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam.</p>
                    </div>
                    <div className="row w-toy-cart">
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/cosmetics.jpg" alt="" />
                            <div className="f-detail">
                                <h3>LuxeGlow Beauty</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$35.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/hand-bag.jpg" alt="" />
                            <div className="f-detail">
                                <h3>GlamourGrip</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$55.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/pant-coat.jpg" alt="" />
                            <div className="f-detail">
                                <h3>SharpSuits</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$130.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/slipper.jpg" alt="" />
                            <div className="f-detail">
                                <h3>SoftSerenity</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$20.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/Sunglasses.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Stylish Sunglasses</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$17.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/teamaker.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Coffee Maker</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$20.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/shirt.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Generic T-Shirt</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$25.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/Wristwatch.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Classic Wristwatch</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$40.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/Earbuds.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Wireless Earbuds</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$20.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/pillow.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Bedding Pillowcases</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$25.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/Speaker.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Bluetooth Speaker</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$42.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        <div className="col-md-3 my-5 card">
                            <img src="/Images/chair.jpg" alt="" />
                            <div className="f-detail">
                                <h3>Outdoor Camping Chair</h3>
                                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                                <span>$28.00</span><br />
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
