import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
export const Cetagory = () => {
  return (
    <>
      <div className="main-ceta py-5">
        <div className="container p-cetagory">
          <div className="row">
            <div className="col-md-3 ceta-detail p-2">
              <h2>Upto 30% Off</h2>
              <h4>We have different Cetagory</h4>
              <ul>
                <li><a href="">Plastic Toys</a></li>
                <li><a href="">Wooden Toys</a></li>
                <li><a href="">Garments</a></li>
                <li><a href="">Special Offer</a></li>
                <li><a href="">Beauty Product</a></li>
                <li><a href="">Men's Fashion</a></li>
                <li><a href="">Women's Fashion</a></li>
                <li><a href="">Gadgets</a></li>
                <li><a href="">Jewllery</a></li>
                <li><a href="">Branded Shoes</a></li>
                <li><a href="">Accessories</a></li>
              </ul>
              {/* <button>button</button> */}
            </div>
            <div className="col-md-8 ceta-img ml-2">
              <Swiper
                loop={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                modules={[Autoplay]}
                spaceBetween={0}
                effect='fade'
                slidesPerView={1}
              >
                <SwiperSlide>
                  <img src="/Images/cetag1.jpg" alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Images/cetag2.jpg" alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Images/cetag3.jpg" alt="#" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Images/cetag4.png" alt="#" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="garment my-5 px-5">
          <div className="garment-detail">
            <h2>Dress to Impress</h2>
            <div className="row">
              <div className="col-lg-2 my-5 card">
                <img src="/Images/shirt.jpg" alt="" />
                <div className="f-detail">
                  <h3>Chic & Unique</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$50.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/shirt2.jpg" alt="" />
                <div className="f-detail">
                  <h3>Clothing Way</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$45.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/shirt5.jpg" alt="" />
                <div className="f-detail">
                  <h3>Timeless Style</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$40.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/shirt4.jpg" alt="" />
                <div className="f-detail">
                  <h3>Wardrobe Staples</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$55.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/shirt6.jpg" alt="" />
                <div className="f-detail">
                  <h3>Dress to Impress</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$35.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="beauty my-5 px-5">
          <div className="beauty-detail">
            <h2>Beauty Beyond Boundaries</h2>
            <div className="row">
              <div className="col-md-2 my-5 card">
                <img src="/Images/beauty1.jpg" alt="" />
                <div className="f-detail">
                  <h3>Where Beauty Meets Confidence</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$21.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/beauty2.jpg" alt="" />
                <div className="f-detail">
                  <h3>Where Fragrance Meets Fashion</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$65.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/beauty3.jpg" alt="" />
                <div className="f-detail">
                  <h3>Embrace Your Natural Beauty</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$40.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/beauty4.jpg" alt="" />
                <div className="f-detail">
                  <h3>Refresh Your Radiance Daily</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$20.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/beauty5.webp" alt="" />
                <div className="f-detail">
                  <h3>Fragrance for Every Occasion</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$31.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="beauty my-5 px-5">
          <div className="beauty-detail">
            <h2>Timeless Jewelry</h2>
            <div className="row">
              <div className="col-md-2 my-5 card">
                <img src="/Images/jewllery1.jpg" alt="" />
                <div className="f-detail">
                  <h3>Radiate Elegance with Haar</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$110.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/jewllery2.webp" alt="" />
                <div className="f-detail">
                  <h3>Adorn Your Ears with Grace</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$60.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/jewllery3.jpg" alt="" />
                <div className="f-detail">
                  <h3>Ring in Elegance and Style</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$60.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/jewllery4.jpg" alt="" />
                <div className="f-detail">
                  <h3>Embrace the Beauty of Chains</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$70.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
              <div className="col-md-2 my-5 card">
                <img src="/Images/jewllery5.jpeg" alt="" />
                <div className="f-detail">
                  <h3>Your Journey to Bangle Glamour</h3>
                  <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                  <span>$40.00</span><br />
                  <button className='cart-btn'>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
