import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export const ToyW = () => {
  return (
    <>
      <div className="toy">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row pt-5">
                <div className="col-md-6">
                  <img src="/Images/wood-1.avif" alt="" className="toy-top-img" />
                </div>
                <div className="col-md-6">
                  <img src="/Images/wood-9.avif" alt="" className="toy-top-img" />
                </div>
              </div>
              <div className="row">
                <div className="clo-md-12 py-5">
                  <h3>Lorem ipsum dolor sit</h3>
                  <p className='pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis architecto minus aut corporis nisi officia voluptatem, omnis expedita, eveniet, accusantium magnam? Tempora aspernatur ea, laboriosam libero laborum, quia quaerat id non quisquam deserunt iure ratione voluptas deleniti consectetur est similique provident nam veritatis dolores repellendus dolore porro commodi.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 toy-top-img-big py-5">
              <img src="/Images/wood-12.avif" alt="" />
            </div>
          </div>
        </div>
        <div className="container my-5 p-5">
          <div className="row w-toy-cart">
            <div className="col-md-4 my-5">
              <img src="/Images/wood-2.avif" alt="" />
              <div className="f-detail">
                <h3>CarvedKids Crafts</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$33.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/wood-3.avif" alt="" />
              <div className="f-detail">
                <h3>ClassicWood Creations</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$30.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/wood-4.avif" alt="" />
              <div className="f-detail">
                <h3>TreeTop Toys</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$20.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/wood-6.avif" alt="" />
              <div className="f-detail">
                <h3>WoodWheel Roadster</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$50.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/wood-10.avif" alt="" />
              <div className="f-detail">
                <h3>Nature's Playthings</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$10.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <img src="/Images/wood-7.avif" alt="" />
              <div className="f-detail">
                <h3>WoodWonder Blocks</h3>
                <i><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></i><br />
                <span>$17.00</span><br />
                <button className='cart-btn'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
