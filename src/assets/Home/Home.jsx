import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Typewriter from 'typewriter-effect';
export const Home = () => {
  return (
    <>
      <section id='section-1'>
        <div className="sec-1">
          <Typewriter 
          options ={{
            strings: ['<h3>You See Here New Design</h3>'],
            autoStart: true,
            loop: true,
            delay: 100,
            cursor: '',
          }}
          />
          <button>Variety</button>
        </div>
      </section>

      {/* Feature Scetion  */}

      <section className='container card-container' id='section-2'>

        {/* New Arrival Section  */}

        <div className="sec-2 my-5">
          <div className="f-content text-center">
            <h2><span className='text-danger'>New</span> Arrivals</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam.</p>
          </div>
          <div className="row feature py-5">
            <div className="col-lg-3 my-5">
              <img src="/Images/shoes-1.png" alt="" />
              <div className="f-detail">
                <h3>Branded Shoes</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$120.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/shoes-2.png" alt="" />
              <div className="f-detail">
                <h3>Branded Shoes</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$130.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/shoes-3.png" alt="" />
              <div className="f-detail">
                <h3>Branded Shoes</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$100.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/shoes-4.png" alt="" />
              <div className="f-detail">
                <h3>Branded Shoes</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$150.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Product Section */}

        <div className="sec-2 my-5">
          <div className="f-content text-center">
            <h2><span className='text-danger'>Popular</span> Product</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam.</p>
          </div>
          <div className="row feature py-5">
            <div className="col-lg-3 my-5">
              <img src="/Images/bracelet.jpg" alt="" />
              <div className="f-detail">
                <h3>Rose Gold Bracelet</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$250.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/watch.jpg" alt="" />
              <div className="f-detail">
                <h3>Skelton Watch</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$33.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/locket.jpg" alt="" />
              <div className="f-detail">
                <h3>Gold-Plated Locket</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$45.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/glasses.jpg" alt="" />
              <div className="f-detail">
                <h3>Ray-Ban Aviator</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$170.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/purse.jpg" alt="" />
              <div className="f-detail">
                <h3>Leather Lovelock</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$130.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/jacket.jpg" alt="" />
              <div className="f-detail">
                <h3>Burberry</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$107.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/t-shirt.jpg" alt="" />
              <div className="f-detail">
                <h3>Gildan T-Shirt</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$13.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-lg-3 my-5">
              <img src="/Images/man-purse.jpg" alt="" />
              <div className="f-detail">
                <h3>Men's Luxury Wallet</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$34.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Section Top trend  */}

        <div className="container sec-3 trend">
          <div className="f-content text-center pb-5">
            <h2><span className='text-danger'>Top</span> Trend</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, numquam.</p>
          </div>
          <Swiper
            loop={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            modules={[Autoplay, EffectCoverflow]}
            spaceBetween={50}
            effect='coverflow'
            slidesPerView={3}
          >

            <div className="container">
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-6.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-7.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-8.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-9.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-10.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-11.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='p-3 my-5'>
                <img src="/Images/headphone-12.png" alt="" />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>

      </section>
    </>
  )
}
